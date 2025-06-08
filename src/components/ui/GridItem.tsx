export const GridItem = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div className={`rounded-3xl shadow-sm p-1 bg-white ${className}`}>
            {children}
        </div>
    );
};
