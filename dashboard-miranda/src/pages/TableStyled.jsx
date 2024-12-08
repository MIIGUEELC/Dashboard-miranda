import styled from "styled-components";

//GENERAL

export const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    background-color: #F9F9F9;
    border-radius: .8em;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

export const Row = styled.tr`
    text-align: left;
    border: none;
    border-top: ${(props) => (props.type === "body" ? "2px solid #E0E0E0" : "none")};
`;

export const Th = styled.th`
    padding: 1.2em;
    color: #444444;
    font-size: 1.1rem;
    font-weight: 700;
    font-family: "Roboto", sans-serif;
    text-transform: uppercase;
`;

export const Td = styled.td`
    padding: 1.2em;
    color: #555555;
    font-size: 1rem;
    font-weight: 400;
    font-family: "Roboto", sans-serif;
    vertical-align: ${(props) => (props.top ? "top" : "middle")};
`;

export const Container = styled.div`
    display: flex;
    font-weight: 500;
    cursor: pointer;
    align-items: center;
    gap: 1em;
`;

export const InfoContainer = styled.div`
    margin-left: 1.2em;
`;

export const Image = styled.img`
    border-radius: .5em;
    ${(props) => (props.type === "guest" && "width: 50px; height: 50px; border: 2px solid #ddd")};
    ${(props) => (props.type === "room" && "width: 160px; height: auto; border: 1px solid #ddd; padding: 5px; border-radius: .8em;")};
    ${(props) => (props.type === "employee" && "width: 100px; height: 100px; border: 3px solid #ddd;")};
`;

export const TextLight = styled.p`
    color: #B0B0B0;
    font-size: 0.95rem;
    font-weight: 400;
    ${(props) => (props.type === "room" && "margin-bottom: .6em")};
    ${(props) => (props.type === "employee" && "margin: .6em 0")};
`;

// BOOKINGS LIST
export const GuestHour = styled.p`
    font-size: 0.95rem;
    font-weight: 300;
`;

export const GuestNotes = styled.button`
    width: 90%;
    padding: .7em;
    font-family: "Roboto", sans-serif;
    font-size: 1.1rem;
    border-radius: 1.2em;
    background-color: ${(props) => (props.active ? "#E7F9F4" : "transparent")};
    color: ${(props) => (props.active ? "#2C2C2C" : "#A0A0A0")};
    border: ${(props) => (props.active ? "none" : "1px solid #B0B0B0")};
    cursor: ${(props) => (props.active ? "pointer" : "default")};
`;

export const GuestStatus = styled.button`
    width: 90%;
    padding: .7em;
    font-family: "Roboto", sans-serif;
    font-size: 1.1rem;
    border-radius: 1.2em;
    border: none;
    color: #FFFFFF;
    background-color: ${(props) => (props.type === "Refund" ? "#F27D7D" : 
                                     props.type === "Booked" ? "#64B57E" :
                                     props.type === "Pending" ? "#D5D5D5" : 
                                     props.type === "Cancelled" ? "#B4B4B4" : "#E27D7D")};
`;

// ROOMS LIST
export const RoomId = styled.p`
    color: #B0B0B0;
    font-size: 0.9rem;
    font-weight: 400;
    margin-bottom: .6em;
`;

export const RoomPrice = styled.p`
    display: inline;
    color: #333333;
    font-weight: 700;
`;

export const RoomLittleText = styled.p`
    display: inline;
    color: #9B9B9B;
    font-size: 0.9rem;
`;

export const RoomStatus = styled.button`
    width: 100%;
    padding: .7em;
    font-family: "Roboto", sans-serif;
    font-size: 1.1rem;
    border-radius: 1.2em;
    border: none;
    color: #FFFFFF;
    background-color: ${(props) => (props.avaiable ? "#64B57E" : "#F27D7D")};
    cursor: pointer;
`;

// EMPLOYEES LIST
export const ConciergeStatus = styled.p`
    width: 100%;
    font-family: "Roboto", sans-serif;
    font-size: 1.1rem;
    border: none;
    background: transparent;
    color: ${(props) => (props.active ? "#64B57E" : "#F27D7D")};
`;
