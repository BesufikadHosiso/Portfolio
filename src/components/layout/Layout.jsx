import { Header } from '../sections/Header';
import { Footer } from './Footer';
import { CustomCursor } from '../ui/CustomCursor';

export const Layout = ({ children }) => {
    return (
        <>
            <CustomCursor />
            <Header />
            <main className="pt-24">
                {children}
            </main>
            <Footer />
        </>
    );
};