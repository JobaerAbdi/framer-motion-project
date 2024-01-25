const Container = ({children}) => {
    return (
        <div className="bg-slate-500 w-full max-w-[1300px] px-[20px] mx-auto">
            {children}
        </div>
    );
};

export default Container;