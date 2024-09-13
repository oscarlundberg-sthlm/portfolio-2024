"use client";

import AudioTrack from "@/components/AudioTrack";
import ClientLayout from "@/components/ClientLayout";

export default function Home() {
  return (
    <ClientLayout>
      <AudioTrack
        data={{
          id: 1,
          path: "/songs/3_temp.mp3",
          durationInSeconds: 160,
          artist: "Oscar Lundberg",
          trackTitle: "Introduction",
          image: {
            src: "/img/content/polaroids.jpg",
            width: 1500,
            height: 1500,
            alt: "a photo of me, Oscar",
          },
          additionalInfo: (
            <>
              <p>Hi, I'm Oscar.</p>
              <p>
                I'm a frontend developer graduate who got hired as a software
                engineer straight out of school.
              </p>
              <p>
                I made all the songs on here btw. They don't have anything in
                particular to do with the texts, they're just a fun twist.
              </p>
            </>
          ),
        }}
      />
      <AudioTrack
        data={{
          id: 2,
          path: "/songs/microsampling_01.mp3",
          durationInSeconds: 184,
          artist: "Random Access Memories",
          trackTitle: "Web Development",
          image: {
            src: "/img/content/computer.jpg",
            width: 2400,
            height: 1600,
            alt: "a commodore computer in 80s lighting",
          },
          additionalInfo: (
            <>
              <p>My web dev xp:</p>
              <p>
                I've worked with frameworks like Next.js (React, TypeScript,
                JavaScript) and Laravel (PHP, Blade). CMSs' like Sanity,
                Statamic and Wordpress. All kinds of third-party integrations.
              </p>
              <p>
                I've touched most parts of web development, from databases &
                backend, CMS, frontend & design, to deployment, DNS, etc...
              </p>
            </>
          ),
        }}
      />
      <AudioTrack
        data={{
          id: 3,
          path: "/songs/We_Are_Human.mp3",
          durationInSeconds: 216,
          artist: "Innit",
          trackTitle: "It's The Bass Player",
          image: {
            src: "/img/content/2013-2-killerball-5.jpg",
            width: 1920,
            height: 1979,
            alt: "the band Killerball",
          },
          additionalInfo: (
            <>
              <p>
                I've been in a bunch of bands, and I've played behind
                singer-songwriters and artists.
              </p>
              <p>
                Playing music with others comes with a lot of practise in
                cooperation and doing your part, while collectively working
                towards a common goal.
              </p>
            </>
          ),
        }}
      />
      <AudioTrack
        data={{
          id: 4,
          path: "/songs/chill_nb3_v2.mp3",
          durationInSeconds: 158,
          artist: "Go team, go sports",
          trackTitle: "Indoor Rock Climbing",
          image: {
            src: "/img/content/patrick-hendry-_JjBZdLFQiM-unsplash.jpg",
            width: 1080,
            height: 1620,
            alt: "a rock climber scaling a wall",
            focusY: 30,
          },
          additionalInfo: (
            <>
              <p>
                I like going to the climbing gym in my spare time. I've always
                been a fan of sports like climbing, skateboarding and
                snowboarding - where you can get into a flow state.
              </p>
              <p>To me, it's like meditation.</p>
            </>
          ),
        }}
      />
      <AudioTrack
        data={{
          id: 5,
          path: "/songs/1_temp.mp3",
          durationInSeconds: 196,
          artist: "Key Performance Indicators",
          trackTitle: "Everyday Vibes",
          image: {
            src: "/img/content/camping.jpg",
            width: 1080,
            height: 1344,
            alt: "a rock climber scaling a wall",
            focusY: 30,
          },
          additionalInfo: (
            <>
              <p>
                Most days are spent at work. In fact, most of our life is lived
                at work. That's why the everyday vibes matter to me.
              </p>
              <p>
                The "everyday vibes" are a lot to unpack in a little text box,
                but in short, if your workplace has actual sincere, warm
                laughter on the regular - that's a really good sign to me.
              </p>
            </>
          ),
        }}
      />
    </ClientLayout>
  );
}
