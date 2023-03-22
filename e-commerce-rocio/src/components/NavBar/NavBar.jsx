import CartWidget from "../CartWidget/CartWidget"
const NavBar = () => {
    return (
        <nav>
            <h3>Ecommerce</h3>
            <div>
                <button>Remeras</button>
                <button>Prints</button>
                <button>Bolsas</button>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar