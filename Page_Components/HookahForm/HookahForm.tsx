import React, {Suspense} from 'react';
import styles from './HookahForm.module.css';
import { Footer } from '../../layout/Footer/Footer';
import { Header } from '../../layout/Header/Header';
const Model = React.lazy(() => import('../../3d/HookahModel'));
import {OrbitControls} from "@react-three/drei";
import {Canvas} from "@react-three/fiber";

export const HookahForm = (): JSX.Element => {
	return (
		<div className={styles.wrapper}>
			<Header searchInput={false} />
			<div className={styles.wrapperContent}>
                <Canvas className="z-10 mx-10"
                    camera={{ position: [1, 0, 10], fov: 15 }}
                    style={{
                        width: '96vw',
                        height: '100vh'
                    }}
                >
                    <ambientLight intensity={1.25} />
                    <ambientLight intensity={0.1} />
                    <directionalLight intensity={0.4} />
                    <Suspense fallback={null}>
                        <Model position={[0, 0, 0]} />
                    </Suspense>
                    <OrbitControls />
                </Canvas>
				<Footer />
			</div>
		</div>
	);
};