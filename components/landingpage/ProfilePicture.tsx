import React, { useEffect, useRef } from 'react'
import { CSSOthersObject } from '@emotion/serialize';
import tw  from 'twin.macro';
import { animated, to, useSpring } from 'react-spring'
import { useGesture } from 'react-use-gesture';
import {css} from 'twin.macro';
const styles: CSSOthersObject = {
  container: [tw`md:w-52 md:h-52 w-36 h-36 cursor-pointer`],
  img: [tw`rounded-full w-full h-full`],
};

const calcX = (y: number, ly: number) => -(y - ly - window.innerHeight / 2) / 20
const calcY = (x: number, lx: number) => (x - lx - window.innerWidth / 2) / 20

const ProfilePicture: React.VFC = () => {
  useEffect(() => {
    const preventDefault = (e: Event) => e.preventDefault()
    document.addEventListener('gesturestart', preventDefault)
    document.addEventListener('gesturechange', preventDefault)

    return () => {
      document.removeEventListener('gesturestart', preventDefault)
      document.removeEventListener('gesturechange', preventDefault)
    }
  }, [])

  const domTarget = useRef(null)
  const [{ x,y,rotateX, rotateY, scale, zoom, rotateZ }, api] = useSpring(
    () => ({
      rotateX: 0,
      rotateY: 0,
      rotateZ: 0,
      scale: 1,
      zoom: 0,
      x: 0,
      y: 0,
      config: { mass: 5, tension: 350, friction: 40 },
    })
  )

  useGesture(
    {
      onPinch: ({ offset: [d, a] }) => api({ zoom: d / 200, rotateZ: a }),
      onMove: ({ xy: [px, py], dragging }) =>
        !dragging &&
        api({
          rotateX: calcX(py, y.get()),
          rotateY: calcY(px, x.get()),
          scale: 1.1,
        }),
      onHover: ({ hovering }) => {
        // eslint-disable-next-line no-console
        console.log("is hovering: ", hovering)
        !hovering && api({ rotateX: 5, rotateY: 0, scale: 1 })
      }
    },
    { domTarget, eventOptions: { passive: false } }
  )
  return (
    <div>
    <animated.div
      ref={domTarget}
      css={styles.container}
      style={{
      transform: 'perspective(600px)',
      scale: to([scale, zoom], (s, z) => s + z),
      rotateZ,
      rotateX,
      rotateY,
    }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/images/Linus.jpg" css={styles.img} />
    </animated.div>
    </div>
  );
};

export default ProfilePicture;
