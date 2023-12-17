interface FixedImageProps {
    link: string;
}

export default function FixedImage({ link }: FixedImageProps) {

    return (
        <div style={{position: 'fixed', zIndex: -4, top: 0, left: 0, right: 0, bottom: 0, backgroundImage: `url('${link}')`}}/>
    );
}