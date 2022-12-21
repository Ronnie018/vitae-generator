const Header = ({ children }: any) => {
  return (
    <div className="bg-white text-black h-14 flex justify-between">
      <div className="logo h-full">
        <span className="h-full flex items-center content-center pl-4">
          <a href="/" className="text-2xl">
            {children}
          </a>
        </span>
      </div>
      <div className="navigation-controller">
        <div className="bg-green-600 sm:block w-14 h-14" />
        <nav className="h-full text-orange-600 text-xl">
          <ul>
            <li>aaa</li>
            <li>bbb</li>
            <li>ccc</li>
            <li>ddd</li>
            <li>eee</li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
