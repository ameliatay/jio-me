import { useState } from "react"

const { Center, Text, VStack, Input, Button } = require("@chakra-ui/react")

const EventTitle = () => {
    const [eventTitle, setEventTitle] = useState("")
    const handleChange = (e) => setEventTitle(e.target.value)

    const handleCreateEvent = () => {
        fetch('https://letsgox.vercel.app/event/', {
            // fetch('http://localhost:3001/event/', {
            method: 'POST',
            body: JSON.stringify({eventTitle: eventTitle}),
            headers: {
            "Content-Type": "application/json"
            }
        })
    }

    return (
        <Center>
            <VStack>
            <Text fontSize={'36px'} fontWeight={600}>
                let's go
            </Text>
            <Input placeholder="Event title" w={['90vw', '40vw']} value={eventTitle} onChange={handleChange}/>
            <Button mt={5} onClick={handleCreateEvent}>
                Create event
            </Button>
            </VStack>
        </Center>
    )
}

export default EventTitle