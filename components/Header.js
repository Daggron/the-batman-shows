import Link from 'next/link';

const listStyle = {
    marginRight: 15 
};

const Header = () =>(
    <div>
        <Link href='/' >
            <a style={listStyle}>Home</a>
        </Link>
        <Link href='/about'>
            <a style={listStyle}>
                About us
            </a>
        </Link>
    </div>
);

export default Header;