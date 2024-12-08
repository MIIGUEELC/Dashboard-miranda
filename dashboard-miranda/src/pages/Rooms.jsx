


import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Table, Row, Th, Td, Container, InfoContainer, Image, TextLight, RoomPrice, RoomLittleText, RoomStatus } from "./TableStyled";

export const ListComponent = () => {
    const navigate = useNavigate();
    
    // Estado para almacenar las habitaciones
    const [rooms, setRooms] = useState([]);
    
    // Estado de carga
    const [loading, setLoading] = useState(true);

    // useEffect para obtener los datos de las habitaciones
    useEffect(() => {
        const fetchRooms = async () => {
            setLoading(true);
            try {
                const roomsData = await fetch("src/data/rooms.json").then(res => res.json());
                setRooms(roomsData);
            } catch (error) {
                console.error("Error fetching data: ", error);
            } finally {
                setLoading(false);
            }
        };

        fetchRooms();
    }, []);

    // Formatear fechas
    const formatDateHalf1 = (dateString) => {
        const date = new Date(dateString);
        const options = { month: "short", day: "numeric", year: "numeric" };
        let formattedDate = new Intl.DateTimeFormat("en-US", options).format(date);
        const day = date.getDate();
        const suffix =
            day % 10 === 1 && day !== 11 ? "st" :
            day % 10 === 2 && day !== 12 ? "nd" :
            day % 10 === 3 && day !== 13 ? "rd" : "th";
        formattedDate = formattedDate.replace(/\b\d{1,2}\b/, `${day}${suffix}`);
        return formattedDate;
    };

    const handleNavigate = (id) => {
        navigate(`/room/${id}`);
    };

    // Si los datos están cargando, mostrar un mensaje
    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <Table>
            <thead>
                <Row type="head">
                    <Th>Room Name</Th>
                    <Th>Bed Type</Th>
                    <Th>Room Floor</Th>
                    <Th>Facilities</Th>
                    <Th>Rate</Th>
                    <Th>Status</Th>
                </Row>
            </thead>
            <tbody>
                {rooms.map((data) => (
                    <Row key={data.id} type="body">
                        <Td>
                            <Container onClick={() => handleNavigate(data.id)}>
                                <Image type="room" src={data.image} alt={data.room_name} />
                                <InfoContainer>
                                    <TextLight type="room">#{data.id}</TextLight>
                                    <p>{data.room_name}</p>
                                </InfoContainer>
                            </Container>
                        </Td>
                        <Td>{data.bed_type}</Td>
                        <Td>{data.room_floor}</Td>
                        <Td>{data.facilities}</Td>
                        <Td>
                            <RoomPrice>${data.rate}</RoomPrice>
                            <RoomLittleText> /night</RoomLittleText>
                        </Td>
                        <Td>
                            <RoomStatus avaiable={data.avaiable}>
                                {data.avaiable ? "Available" : "Booked"}
                            </RoomStatus>
                        </Td>
                    </Row>
                ))}
            </tbody>
        </Table>
    );
};

