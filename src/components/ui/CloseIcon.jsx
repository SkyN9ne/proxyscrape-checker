
import React from 'react';

const CloseIcon = ({ onChange }) => (
    <svg className="close-svg" onClick={onChange} viewBox="0 0 24 24"> 
    	<g> 
    	<path fill="none" d="M0 0h24v24H0z"/> 
    	<path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-9.414l2.828-2.829 1.415 1.415L13.414 12l2.829 2.828-1.415 1.415L12 13.414l-2.828 2.829-1.415-1.415L10.586 12 7.757 9.172l1.415-1.415L12 10.586z"/> 
    	</g> 
    </svg>
);

export default CloseIcon;


