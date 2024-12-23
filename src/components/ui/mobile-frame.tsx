import React from 'react';
import styled from 'styled-components';

interface ContainerProps {
  $width?: number;
}

const Container = styled.div<ContainerProps>`
  position: relative;
  width: clamp(200px, 90vw, 280px);
  margin: 20px;
  
  .scale-wrapper {
    transform-origin: top left;
    transform: scale(${props => Math.min(1, (props.$width || 280) / 280)});
  }
`;

const Frame = styled.div`
  position: relative;
  width: 280px;
  height: 560px;
`;

const OuterFrame = styled.div`
  position: absolute;
  top: -16px;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #1f2937;
  border-radius: 45px;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.3);
`;

const InnerFrame = styled.div`
  position: absolute;
  top: 8px;
  left: 8px;
  right: 8px;
  bottom: 8px;
  background-color: #000000;
  border-radius: 42px;
  overflow: hidden;
`;

const Notch = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 120px;
  height: 18px;
  background-color: #000000;
  border-bottom-left-radius: 24px;
  border-bottom-right-radius: 24px;
  z-index: 20;
`;

const Screen = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0;
  overflow: hidden;
`;

const SideButton = styled.div`
  position: absolute;
  right: -2px;
  top: 96px;
  width: 3px;
  height: 40px;
  background-color: #4b5563;
  border-top-left-radius: 2px;
  border-bottom-left-radius: 2px;
`;

const VolumeButton = styled.div<{ position: 'up' | 'down' }>`
  position: absolute;
  left: -2px;
  top: ${props => props.position === 'up' ? '96px' : '144px'};
  width: 3px;
  height: 32px;
  background-color: #4b5563;
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;
`;

interface MobileFrameProps {
  children: React.ReactNode;
  className?: string;
}

export function MobileFrame({ children, className }: MobileFrameProps) {
  const [containerWidth, setContainerWidth] = React.useState(280);
  const containerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  return (
    <Container ref={containerRef} className={className} $width={containerWidth}>
      <div className="scale-wrapper">
        <Frame>
          <OuterFrame>
            <InnerFrame>
              <Notch />
              <Screen>
                {children}
              </Screen>
            </InnerFrame>
            <SideButton />
            <VolumeButton position="up" />
            <VolumeButton position="down" />
          </OuterFrame>
        </Frame>
      </div>
    </Container>
  );
}