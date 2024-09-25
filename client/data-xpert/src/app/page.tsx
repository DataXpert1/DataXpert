import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<div className="flex flex-col justify-center items-center h-screen gap-[20px]">
			<h1 className="font-bold text-5xl">DataXpert</h1>
			<div className="flex gap-10">
				<Link href="/auth/login">
					<button
						type="button"
						className="bg-black text-white rounded-[10px] h-[40px] w-[100px] font-bold"
					>
						login
					</button>
				</Link>

				<Link href="/auth/register">
					<button
						type="button"
						className="bg-black text-white rounded-[10px] h-[40px] w-[100px] font-bold"
					>
						register
					</button>
				</Link>
			</div>
		</div>
	);
}