function Header() {
    return <nav>
        <div className="nav-wrapper">
            <div className="container">
                <a href="#" className="brand-logo center">Shop</a>
                <ul id="nav-mobile" className="left hide-on-med-and-down">
                    <li><a href="sass.html">Каталог товаров</a></li>
                    <li><a href="badges.html">Избранное</a></li>
                    <li><a href="collapsible.html">Настройки</a></li>
                </ul>
            </div>
        </div>
    </nav>
}
export { Header };