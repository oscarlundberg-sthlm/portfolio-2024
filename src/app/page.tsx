"use client";

import AudioTrack from "@/components/AudioTrack";
import ClientLayout from "@/components/ClientLayout";

export default function Home() {
  return (
    <ClientLayout>
      <AudioTrack
        data={{
          id: 1,
          path: "songs/We Are Human.wav",
          artist: "Oscar Lundberg",
          trackTitle: "Hello",
          durationInSeconds: 216,
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
            </>
          ),
        }}
      />
      <AudioTrack
        data={{
          id: 2,
          path: "songs/Cola Hair - Microsampling 01.mp3",
          artist: "The Bandmates",
          trackTitle: "I Used To Be In Bands",
          durationInSeconds: 7,
          image: {
            src: "/img/content/tom-rogerson-XYJ-huzNby4-unsplash.jpg",
            width: 1536,
            height: 2060,
            alt: "a band performing on stage",
          },
          additionalInfo: (
            <>
              <p>
                I've had the pleasure to be in bands, play behind
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
          id: 3,
          path: "songs/Cola Hair - Microsampling 02.mp3",
          artist: "Go team, go sports",
          trackTitle: "Indoor Rock Climber",
          durationInSeconds: 15,
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
    </ClientLayout>
  );
}
