import Link from "next/link";

export default function Page() {
    return (
        <div className='flex flex-col items-center justify-center' style={{height: `calc(100dvh - 75px)`}}>
            <h1 className='text-8xl font-bold font-sans'>404</h1>
            <p className='m-3'>Page Not Found</p>
            <button aria-label='go-back-to-home' >
                <Link href='/' className='p-4 bg-black text-white rounded-full border-transparent border flex m-5 hover:bg-white hover:text-black hover:border-black transition-all'>Back Home</Link>
            </button>
        </div>
    );
}
