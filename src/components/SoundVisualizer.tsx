import { useEffect, useRef, useState } from "react";
import { Progress } from "@/components/ui/progress";

interface SoundVisualizerProps {
  onSoundThreshold: () => void;
}

const SoundVisualizer = ({ onSoundThreshold }: SoundVisualizerProps) => {
  const [volume, setVolume] = useState(0);
  const audioContextRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const sourceRef = useRef<MediaStreamAudioSourceNode | null>(null);
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    const initializeAudio = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        audioContextRef.current = new AudioContext();
        analyserRef.current = audioContextRef.current.createAnalyser();
        sourceRef.current = audioContextRef.current.createMediaStreamSource(stream);
        
        sourceRef.current.connect(analyserRef.current);
        analyserRef.current.fftSize = 256;
        
        const bufferLength = analyserRef.current.frequencyBinCount;
        const dataArray = new Uint8Array(bufferLength);
        
        const updateVolume = () => {
          if (!analyserRef.current) return;
          
          analyserRef.current.getByteFrequencyData(dataArray);
          const average = dataArray.reduce((a, b) => a + b) / bufferLength;
          const normalizedVolume = Math.min(100, (average / 128) * 100);
          setVolume(normalizedVolume);
          
          // Check if volume exceeds threshold (adjust 60 as needed)
          if (normalizedVolume > 60) {
            onSoundThreshold();
          }
          
          animationFrameRef.current = requestAnimationFrame(updateVolume);
        };
        
        updateVolume();
      } catch (error) {
        console.error("Error accessing microphone:", error);
      }
    };

    initializeAudio();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (audioContextRef.current) {
        audioContextRef.current.close();
      }
    };
  }, [onSoundThreshold]);

  return (
    <div className="w-full max-w-md mx-auto">
      <Progress value={volume} className="h-8 transition-all duration-75" />
    </div>
  );
};

export default SoundVisualizer;