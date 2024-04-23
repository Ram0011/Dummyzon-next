"use client";

import { CartItemwithProduct } from "@/lib/db/cart";
import { formatPrice } from "@/lib/format";
import Image from "next/image";
import Link from "next/link";
import { useTransition } from "react";
import { setProductQuantity } from "./actions";

interface CartEntryProps {
  cartItem: CartItemwithProduct;
  setProductQuantity: (productId: string, quantity: number) => void;
}

export default function CartEntry({
  cartItem: { product, quantity },
}: CartEntryProps) {
  const [isPending, startTransition] = useTransition();

  const quantityOptions: JSX.Element[] = [];
  for (let i = 1; i <= 99; i++) {
    quantityOptions.push(
      <option value={i} key={i}>
        {i}
      </option>
    );
  }

  return (
    <div>
      <div className="flex flex-wrap items-start gap-3">
        <Image
          src={product.imageUrl}
          alt={product.name}
          width={400}
          height={400}
          className="rounded-lg hover:shadow-2xl transition-shadow"
        />
        <div>
          <Link
            href={`/products/${product.id}`}
            className="font-bold text-3xl hover:text-gray-700"
          >
            {product.name}
          </Link>
          <div className="my-5 text-lg">
            <span className="mr-2 text-xl">Price:</span>{" "}
            {formatPrice(product.price)}
          </div>
          <div className="my-5 flex items-center gap-2 ">
            Quantity:{" "}
            <select
              className="select select-bordered w-full max-w-[80px]"
              defaultValue={quantity}
              onChange={(e) => {
                const newQuantity = parseInt(e.target.value);
                startTransition(async () => {
                  await setProductQuantity(product.id, newQuantity);
                });
              }}
            >
              <option value={0}>0(Remove)</option>
              {quantityOptions}
            </select>
          </div>
          <div className="flex items-center gap-3 text-lg my-4">
            <span className="text-xl">Total:</span>{" "}
            {formatPrice(product.price * quantity)}
            {isPending && (
              <span className="loading loading-spinner loading-sm" />
            )}
          </div>
        </div>
      </div>
      <div className="divider" />
    </div>
  );
}
