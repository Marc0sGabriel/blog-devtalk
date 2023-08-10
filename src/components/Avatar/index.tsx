import { AvatarContainer } from './styles';

interface AvatarProps {
  hasBorder?: boolean;
  src: string;
  alt?: string;
}

export function Avatar({ hasBorder = true, src, alt }: AvatarProps) {
  return <AvatarContainer src={src} alt={alt} $inputColor={hasBorder} />;
}
