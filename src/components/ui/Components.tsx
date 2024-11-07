// Card.js
import React from 'react';
// Dialog.js
import {
  useEffect,
  useRef,
  useState,
} from 'react';
import { createPortal } from 'react-dom';

export const Card = ({ children, className, ...props }:{className:string,children:JSX.Element}) => {
  return (
    <div
      className={`bg-white rounded-lg shadow-md overflow-hidden ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export const CardHeader = ({ children, className, ...props }:{className:string,children:JSX.Element}) => {
  return (
    <div
      className={`bg-gray-100 px-6 py-4 border-b ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export const CardTitle = ({ children, className, ...props }:{className:string,children:JSX.Element}) => {
  return (
    <h3
      className={`text-lg font-medium text-gray-900 ${className}`}
      {...props}
    >
      {children}
    </h3>
  );
};

export const CardContent = ({ children, className, ...props }:{className:string,children:JSX.Element}) => {
  return (
    <div className={`p-6 ${className}`} {...props}>
      {children}
    </div>
  );
};

export const Dialog = ({ children, className, ...props }:{className:string,children:JSX.Element[]}) => {
  const [mounted, setMounted] = useState(false);
  const dialogRef = useRef(null);

  useEffect(() => {
    setMounted(true);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleKeydown = (e:any) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };

    document.addEventListener('keydown', handleKeydown);

    return () => {
      document.removeEventListener('keydown', handleKeydown);
      setMounted(false);
    };
  }, []);

  const handleClose = () => {
    // if (dialogRef.current) {
    //   dialogRef.current.close();
    // }
  };

  return mounted
    ? createPortal(
        <dialog
          ref={dialogRef}
          className={`bg-white rounded-lg shadow-md p-6 ${className}`}
          {...props}
        >
          {children}
        </dialog>,
        document.body
      )
    : null;
};

export const DialogTrigger = ({ children, ...props }:{children:JSX.Element}) => {
  return React.Children.only(
    React.cloneElement(children, {
      ...props,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      onClick: (e:any) => {
        children.props.onClick?.(e);
        const dialog = e.currentTarget.closest('dialog');
        if (dialog) {
          dialog.showModal();
        }
      },
    })
  );
};

export const DialogContent = ({ children, ...props }:{children:JSX.Element[]}) => {
  return <div {...props}>{children}</div>;
};

export const DialogHeader = ({ children, ...props }:{children:JSX.Element}) => {
  return <div {...props}>{children}</div>;
};

export const DialogTitle = ({ children, ...props }:{children:string}) => {
  return <h3 {...props}>{children}</h3>;
};

// Input.js

export const Input = React.forwardRef(
  ({ className,value,onChange,placeholder, ...props }:{className?:string,value:string,onChange:(e: React.ChangeEvent<HTMLInputElement>) => void,placeholder:string}/* , ref */) => {
    return (
      <input
        // ref={ref}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        className={`bg-gray-100 border border-gray-300 rounded-md py-2 px-4 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
        {...props}
      />
    );
  }
);

// Button.js

export const Button = ({ children, className,onClick, ...props }:{className:string,children:JSX.Element|string,onClick:()=>void}) => {
  return (
    <button
      className={`bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

// Skeleton.js

export const Skeleton = ({ className, ...props }:{className:string}) => {
  return (
    <div
      className={`bg-gray-200 animate-pulse rounded ${className}`}
      {...props}
    />
  );
};