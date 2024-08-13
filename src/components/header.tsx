import Link from 'next/link';

export default function Header(){
    return(
        <>
            <div className="flex items-center justify-center">
            <ul className="flex gap-20">
                <li><Link href='/'>Home</Link></li>
                <li><Link href='/performance'>Performance</Link></li>
                <li><Link href='/reliability'>Reliability</Link></li>
                <li><Link href='/scale'>Scale</Link></li>
            </ul>
            </div>
        </>
    );
}