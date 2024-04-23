"use client";
import { Session } from "next-auth";
import Image from "next/image";
import profilePicPlaceholder from "../../assets/profile-pic-placeholder.png";
import { signIn, signOut } from "next-auth/react";

interface UserMenuButtonProps {
  session: Session | null;
}

export default function UserMenuButton({ session }: UserMenuButtonProps) {
  const user = session?.user;

  return (
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        {user ? (
          <Image
            src={user?.image || profilePicPlaceholder}
            alt={user?.name || "username"}
            width={32}
            height={32}
            className="w-10 rounded-full"
          />
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        )}
      </label>
      <ul
        tabIndex={0}
        className="menu menu-sm z-30 dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li className="w-full">
          {user ? (
            <button onClick={() => signOut({ callbackUrl: "/" })}>
              Log Out
            </button>
          ) : (
            <button onClick={() => signIn()}>Log In</button>
          )}
        </li>
      </ul>
    </div>
  );
}
