import React from 'react'

export const Navbar: React.FC = () => {
    return (
        <nav id="NavbarContainer">
            <svg className="menueBarIcon" width="15" height="15" viewBox="0 0 15 15"><g transform="translate(-20 -23)"><circle cx="2" cy="2" r="2" transform="translate(20 23)" fill="#262626"/><circle cx="2" cy="2" r="2" transform="translate(20 34)" fill="#262626"/><circle cx="2" cy="2" r="2" transform="translate(31 23)" fill="#262626"/><circle cx="2" cy="2" r="2" transform="translate(31 34)" fill="#262626"/></g></svg>
            <svg className="logoIcon" width="87.086" height="22.992" viewBox="0 0 87.086 22.992"><g transform="translate(-111.032 -97.817)"><path d="M12.709,21.23h0a6.014,6.014,0,0,1-4.274-1.784L1.781,12.794A6.081,6.081,0,0,1,4.52,2.617L13.577.21A6.192,6.192,0,0,1,15.166,0a5.924,5.924,0,0,1,2.712.652,6.211,6.211,0,0,1,2.091,1.739,6.026,6.026,0,0,1,1.047,5.257L18.61,16.707a5.988,5.988,0,0,1-2.26,3.335A6.205,6.205,0,0,1,12.709,21.23ZM15.1,2.268h0a3.945,3.945,0,0,0-1.016.135L7.641,4.124A3.87,3.87,0,0,0,5.9,10.6l4.724,4.725A3.87,3.87,0,0,0,17.1,13.585l1.721-6.444a3.834,3.834,0,0,0-.663-3.349A3.888,3.888,0,0,0,15.1,2.269Z" transform="translate(112.879 97.817) rotate(4.992)" fill="#060dd9"/><text transform="translate(141.118 113.683)" fill="#060dd9" fontSize="12" fontFamily="Poppins-SemiBold, Poppins" fontWeight="600" letterSpacing="0.05em"><tspan x="0" y="0">Audiozic</tspan></text></g></svg>
            <svg className="searchIcon" width="17.312" height="17.932" viewBox="0 0 17.312 17.932"><path d="M18.033,16.333l-4.268-4.439A7.237,7.237,0,1,0,8.224,14.48a7.162,7.162,0,0,0,4.148-1.31l4.3,4.472a.944.944,0,1,0,1.361-1.309ZM8.224,1.889A5.351,5.351,0,1,1,2.873,7.24,5.357,5.357,0,0,1,8.224,1.889Z" transform="translate(-0.984)" fill="#262626"/></svg>
        </nav>
    );
}
