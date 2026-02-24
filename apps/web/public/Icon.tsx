type IconProps = {
  name: 'bars_4'; // extend for other icons
  size?: number;
  color?: string; // ignored for <img>
};

const iconMap = {
  bars_4: 'bars_4.svg', // relative to `public/` folder
};

const Icon: React.FC<IconProps> = ({ name, size = 24 }) => {
  const src = iconMap[name];
  return <img src={src} width={size} height={size} alt={name} />;
};

export default Icon;