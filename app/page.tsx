import Image from "next/image";
import Link from "next/link";
import ProductCard from "./Components/ProductCard";

export default function Home() {
  return (
    <main>
      <h1>Hello World</h1>
      <Link href="./users">Users</Link>
      <ProductCard />
    </main>
  )
}
const car = {car: "Toyota", brand: 2024};
console.log(car);

function printId(id: string | number): void {
  console.log('Your ID is: ${id}');
}

printId(2345);
console.log(main.ID)