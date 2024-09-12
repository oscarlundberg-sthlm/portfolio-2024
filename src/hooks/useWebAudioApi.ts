// import { audioContextSingleton } from "@/singletons/AudioContext";
// import { MutableRefObject, useCallback, useEffect, useRef } from "react";

// export interface WebAudioApi {
//   visualEqualizer: (canvasElement: HTMLCanvasElement) => () => void;
// }

// export function useWebAudioApi(
//   audioElementRef: MutableRefObject<HTMLAudioElement | null>,
//   isPlaying: boolean
// ) {
//   const audioContext = audioContextSingleton();
//   const audioNodesChainRef = useRef<AudioNode[]>([]);
//   const animationFrameIdRef = useRef<number | null>(null);

//   useEffect(() => {
//     if (!audioElementRef.current) return;
//     if (!findAudioNode("MediaElementAudioSourceNode")) {
//       const audioElement = audioElementRef.current;
//       const sourceNode = audioContext.createMediaElementSource(audioElement);
//       audioNodesChainRef.current = [sourceNode, ...audioNodesChainRef.current];
//     }
//     if (!findAudioNode("AnalyserNode")) {
//       const analyserNode = audioContext.createAnalyser();
//       audioNodesChainRef.current = [
//         ...audioNodesChainRef.current,
//         analyserNode,
//       ];
//     }
//   }, [audioElementRef, audioContext]);

//   const connectAudioNodes = useCallback(() => {
//     if (audioNodesChainRef.current.length === 0) return;
//     audioNodesChainRef.current.forEach((node, i, nodes) => {
//       if (i === nodes.length - 1) {
//         node.connect(audioContext.destination);
//         return;
//       }
//       node.connect(nodes[i + 1]);
//     });
//   }, [audioContext.destination]);

//   const disconnectAudioNodes = useCallback(() => {
//     if (audioNodesChainRef.current.length === 0) return;
//     [...audioNodesChainRef.current].reverse().forEach((node) => {
//       try {
//         node.disconnect();
//       } catch (error) {
//         console.error("Error disconnecting node: ", error);
//       }
//     });
//   }, []);

//   useEffect(() => {
//     if (isPlaying) {
//       connectAudioNodes();
//     } else {
//       disconnectAudioNodes();
//     }
//     return () => {
//       disconnectAudioNodes();
//     };
//   }, [isPlaying, connectAudioNodes, disconnectAudioNodes]);

//   function visualEqualizer(canvasElement: HTMLCanvasElement): () => void {
//     const canvasCtx = canvasElement.getContext("2d");
//     if (!canvasCtx) {
//       console.error("Couldn't get canvas 2d context");
//       return () => {};
//     }

//     const analyserNode = findAudioNode<AnalyserNode>("AnalyserNode");
//     if (!analyserNode) return () => {};

//     analyserNode.fftSize = 64;
//     const bufferLength = analyserNode.frequencyBinCount;
//     const dataArray = new Uint8Array(bufferLength);

//     const width = canvasElement.width;
//     const height = canvasElement.height;

//     canvasCtx.clearRect(0, 0, width, height);

//     const draw = () => {
//       animationFrameIdRef.current = requestAnimationFrame(draw);

//       analyserNode.getByteFrequencyData(dataArray);

//       canvasCtx.fillStyle = "#0F1D1C";
//       canvasCtx.fillRect(0, 0, width, height);

//       const barWidth = width / bufferLength;
//       let x = 0;

//       for (let i = 0; i < bufferLength; i++) {
//         const barHeight = dataArray[i];

//         canvasCtx.fillStyle = "#FCF9EF";
//         canvasCtx.fillRect(x, height - barHeight / 2, barWidth, barHeight / 2);

//         x += barWidth + 6;
//       }
//     };

//     draw();
//     return () => {
//       if (animationFrameIdRef.current) {
//         cancelAnimationFrame(animationFrameIdRef.current);
//       }
//     };
//   }

//   function findAudioNode<T extends AudioNode>(name: string): T | false {
//     const node = audioNodesChainRef.current.find(
//       (node) => node.constructor.name === name
//     );
//     if (!node) return false;
//     return node as T;
//   }

//   return {
//     visualEqualizer,
//   };
// }
