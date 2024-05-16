import Image from "next/image";
import headshot from "@/assets/headshot.png";
import Card from "@/components/Card";
import ContactIcons from "@/components/ContactIcons";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Image
        src={headshot}
        alt="Headshot"
        className="border-gray-100 border-x-2 rounded-full sm:w-40 sm:h-40 w-32 h-32 shadow-xl mb-12"
      />

      <div className="text-5xl font-medium mb-4 dark:text-white">
        Connor Park
      </div>
      <div className="text-lg mb-4 dark:text-white">
        Student at the University of Michigan
      </div>

      <ContactIcons />

      <div className="flex xl:flex-row flex-col gap-12">
        <div className="text-base flex flex-col gap-y-8 xl:w-3/5 leading-7 text-zinc-600 dark:text-zinc-400">
          <p>
            I&apos; m a rising sophomore studying computer science at the
            University of Michigan, also working toward minors in Mathematics
            and Business.
          </p>
          <p>
            Some of my interests include college football (Go Blue!), playing
            golf, cooking street food, and venture capital.
          </p>
          <p>Feel free to reach out!</p>
        </div>
        <div className="xl:w-2/5">
          <Card>
            <p className="text-sm dark:text-white">Experience</p>
            <div className="flex flex-col gap-y-4">
              <div>
                <p className="text-sm dark:text-white mb-2">Airgoods</p>
                <div className="flex flex-row justify-between">
                  <p className="text-xs dark:text-zinc-400">
                    Software Engineer Intern
                  </p>
                  <p className="text-xs dark:text-zinc-400">Date</p>
                </div>
              </div>
              <div>
                <p className="text-sm dark:text-white mb-2">
                  Spark RE Analytics LLC
                </p>
                <div className="flex flex-row justify-between">
                  <p className="text-xs dark:text-zinc-400">
                    Software Engineer Intern
                  </p>
                  <p className="text-xs dark:text-zinc-400">Date</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
