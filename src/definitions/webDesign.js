import useMediaQuery from '../hooks/useMediaQuery';

const WebDesigns = (props) => {
    const isDesktop = useMediaQuery('(min-width: 968px)');
    const isTablet = useMediaQuery('(min-width: 641px)')
    const isPhone = useMediaQuery('(min-width: 320px)')

    return {
        isDesktop,
        isTablet,
        isPhone
    };
}

export default WebDesigns