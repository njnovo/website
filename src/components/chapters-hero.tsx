/* eslint-disable @next/next/no-img-element */
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function ChaptersHero() {
  return (
    <div className="relative min-h-screen bg-blue-900">
      <div className="container relative mx-auto flex min-h-screen items-center">
        {/* Left circular image */}
        <div className="absolute left-0 h-[500px] w-[500px] overflow-hidden rounded-full">
          <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.dreamstime.com%2Fphotos-images%2Fgroup-little-students.html%3Fpg%3D8%26view%3Dlatest-uploads&psig=AOvVaw1geZwET4e4R9uQUlo_tO_v&ust=1736830145151000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCIDI8tLy8YoDFQAAAAAdAAAAABAh" alt="People Who Go to School" className="h-full w-full object-cover"/>
        </div>

        {/* Content with margin to wrap around the circle */}
        <div className="ml-[400px] w-full max-w-2xl text-white">
          <h1 className="mb-6 text-6xl font-bold">
            Fund the Future
            <br />
            Our Chapters
          </h1>
          <p className="mb-8 text-xl text-blue-100">
            Fund the Future is a social impact investment fund that supports
            underreprivliaged highschool students with funding and excelling at
            extra-curricular activities.
          </p>
          <p className="mb-12 text-xl text-blue-100">
            Come and create a better future with us.
          </p>
        </div>
      </div>
    </div>
  );
}
