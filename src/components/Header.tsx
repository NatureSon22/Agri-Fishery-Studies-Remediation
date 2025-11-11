type HeaderProps = {
  title: string;
  subtitle: string;
};

const Header = ({ title, subtitle }: HeaderProps) => {
  return (
    <div className="space-y-2">
      <h1 className="font-bold text-2xl lg:text-3xl">{title}</h1>
      <p className="text-slate-500">{subtitle}</p>
    </div>
  );
};

export default Header;
