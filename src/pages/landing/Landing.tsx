import React from 'react';
import { useGlobalContext } from '../../context/context';
import { Benchmark, Company, Footer, HeroBanner, UseCases } from '../../components';

const Landing: React.FC = () => {
    const { mode, setMode } = useGlobalContext();
    const toggleMode = () => setMode(!mode)
    return (
        <React.Fragment>
            <HeroBanner mode={mode} toggleMode={toggleMode} />
            <Company mode={mode} />
            <UseCases mode={mode} />
            <Benchmark mode={mode} />
            <Footer mode={mode} />
        </React.Fragment>
    )
};

export default Landing;