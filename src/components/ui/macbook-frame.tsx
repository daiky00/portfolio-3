import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	position: relative;
	width: 100%;
	max-width: 1200px;
	margin: 20px auto;
`;

const Screen = styled.div`
	background: #1f2937;
	border-radius: clamp(12px, 2vw, 20px);
	overflow: hidden;
	aspect-ratio: 16/9;
	position: relative;
	margin-bottom: -2px;
	padding: clamp(4px, 0.5vw, 6px);
`;

const Inner = styled.div`
	background: white;
	border-radius: clamp(10px, 1.8vw, 16px);
	overflow: hidden;
	height: 100%;
	position: relative;
	display: flex;
`;

const Notch = styled.div`
	position: absolute;
	top: 0;
	left: 50%;
	transform: translateX(-50%);
	width: min(160px, 15%);
	height: clamp(12px, 2.5%, 25px);
	background: #1f2937;
	border-bottom-left-radius: clamp(8px, 1vw, 12px);
	border-bottom-right-radius: clamp(8px, 1vw, 12px);
	z-index: 3;
`;

const Content = styled.div`
	flex: 1;
	position: relative;
	display: flex;

	img {
		width: 100%;
		max-height: 100%;
		object-fit: contain;
		margin: auto;
	}
`;

const Base = styled.div`
	position: relative;
	width: 110%;
	height: 20px;
	background: #666666;
	left: -5%;
	border-radius: 0 0 8px 8px;
`;

const Support = styled.div<{ $position: 'left' | 'right' }>`
	position: absolute;
	bottom: -4px;
	width: 35px;
	height: 4px;
	background: #333333;
	border-radius: 0 0 2px 2px;
	${({ $position }) => ($position === 'left' ? 'left: 3%;' : 'right: 3%;')}
`;

interface MacbookFrameProps {
	children: React.ReactNode;
	className?: string;
}

export function MacbookFrame({ children, className }: MacbookFrameProps) {
	return (
		<Container className={className}>
			<Screen>
				<Inner>
					<Notch />
					<Content>{children}</Content>
				</Inner>
			</Screen>
			<Base>
				<Support $position="left" />
				<Support $position="right" />
			</Base>
		</Container>
	);
}
