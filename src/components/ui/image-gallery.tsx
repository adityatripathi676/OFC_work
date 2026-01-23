'use client';

import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { useInView } from 'framer-motion';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { placeholderImages, type ImagePlaceholder } from '@/lib/data';

type GalleryItem = ImagePlaceholder & {
    ratio: number;
};

export function ImageGallery() {
	const [columns, setColumns] = useState<GalleryItem[][]>([[], [], []]);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        const images = placeholderImages
            .filter((p) => p.group === 'gallery')
            .sort(() => 0.5 - Math.random()); // Shuffle images

        const newColumns: GalleryItem[][] = [[], [], []];
        images.forEach((image, index) => {
            const isPortrait = Math.random() > 0.5;
            const ratio = isPortrait ? 3 / 4 : 4 / 3;
            newColumns[index % 3].push({ ...image, ratio });
        });
        setColumns(newColumns);
    }, []);

    if (!isMounted) {
        return null; // or a skeleton loader
    }

	return (
		<div className="w-full">
			<div className="mx-auto grid w-full max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
				{columns.map((col, colIndex) => (
					<div key={colIndex} className="grid gap-6">
						{col.map((image) => (
							<AnimatedImage
								key={image.id}
								alt={image.description}
								src={image.imageUrl}
								ratio={image.ratio}
								placeholder={`https://placehold.co/800x600/`}
							/>
						))}
					</div>
				))}
			</div>
		</div>
	);
}

interface AnimatedImageProps {
	alt: string;
	src: string;
	className?: string;
	placeholder?: string;
	ratio: number;
}

function AnimatedImage({ alt, src, ratio, placeholder }: AnimatedImageProps) {
	const ref = React.useRef(null);
	const isInView = useInView(ref, { once: true });
	const [isLoading, setIsLoading] = React.useState(true);
	const [imgSrc, setImgSrc] = React.useState(src);

	const handleError = () => {
		if (placeholder) {
			setImgSrc(placeholder);
		}
	};

	return (
		<AspectRatio
			ref={ref}
			ratio={ratio}
			className="bg-muted/50 relative size-full rounded-lg border"
		>
			<img
				alt={alt}
				src={imgSrc}
				className={cn(
					'size-full rounded-lg object-cover opacity-0 transition-all duration-1000 ease-in-out',
					{
						'opacity-100': isInView && !isLoading,
					},
				)}
				onLoad={() => setIsLoading(false)}
				loading="lazy"
				onError={handleError}
			/>
		</AspectRatio>
	);
}
