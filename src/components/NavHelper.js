export default function NavItem({id, children, active, onClick}){
    return (
        <button onClick={() => {
            document.getElementById(id)?.scrollIntoView({behavior: "smooth"});
            onClick?.();
        }}
        className={`nav-link ${
            active ? "text-secondary font-bold" : "text-white hover:text-secondary"
        }`}>
            {children}
        </button>
    );
}