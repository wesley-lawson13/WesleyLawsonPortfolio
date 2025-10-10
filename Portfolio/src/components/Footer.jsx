

export const Footer = () => {
    return <footer className="py-8 px-4 bg-dark relative border-t border-muted/30 mt-8 pt-8 lg:gap-10 justify-between flex flex-wrap">
        <p className="text-blue text-sm">Icons: <a href="https://react-icons.github.io/react-icons/" className="text-md font-semibold">React Icons</a>, <a href="https://lucide.dev/icons/" className="text-md font-semibold">Lucide</a>.</p>
        <p className="text-blue text-sm">Design and code &copy; {new Date().getFullYear()} Wesley Lawson.</p>
    </footer>
};