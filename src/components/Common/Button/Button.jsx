import './Button.modules.css';

function Button ( {children, isSubmit = false, link, ...props} ){

    if(isSubmit){
        return(
            <button id="form-btn" className="button" type="submit" {...props}>{children}</button>
        );
    };

    if(link){
        return(
            <a className="button" href={link}>{children}</a>
        );
    }

    return(
        <button className="button" type='button'>{children}</button>
    );
    
};

export default Button;