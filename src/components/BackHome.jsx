import { PrevIcon } from "@/components/Player"

export default function BackHome() {

    return (
        <a
        href="/"
          className="card-play-button rounded-full bg-green-500 p-4"
        >
          <PrevIcon />
        </a>
      );
}
