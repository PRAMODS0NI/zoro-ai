export interface Chat {
  id: number;
  title: string;
  lastMessage: string;
  time: string;
}

export const chats: Chat[] = [
  {
    id: 1,
    title: "Project Collaboration with Design and Backend Teams",
    lastMessage: "Hey, just wanted to confirm if you received the updated wireframes I sent yesterday. The backend team also mentioned a change in API structure, so we might need to sync up.",
    time: "10:45 AM",
  },
  {
    id: 2,
    title: "Discussion about Internship Opportunities at TezHire",
    lastMessage: "Thank you for showing interest in our internship program. We will share the official guidelines and timeline by the end of this week.",
    time: "09:15 AM",
  },
  {
    id: 3,
    title: "Follow-up on React Native App Deployment Strategy",
    lastMessage: "I tested the latest build on both iOS and Android. While the iOS version works smoothly, the Android version crashes on startup. We might need to look into dependency mismatches.",
    time: "Yesterday",
  },
  {
    id: 4,
    title: "General Chat with Ritika about Weekend Plans",
    lastMessage: "Haha yes, that sounds fun 😂 Let’s finalize the plan by tonight so that everyone is on the same page. Also, don’t forget to bring UNO cards!",
    time: "2 days ago",
  },
  {
    id: 5,
    title: "Client Feedback on Java Home Cloud Course Enrollment App",
    lastMessage: "The client reviewed the course enrollment flow and suggested adding a progress tracker. They also want more detailed analytics on the admin dashboard.",
    time: "1 week ago",
  },
  {
    id: 6,
    title: "Brainstorming Session for AI Chatbot Improvements",
    lastMessage: "We should try adding memory persistence in the chatbot so that it can continue conversations seamlessly across multiple sessions.",
    time: "2 weeks ago",
  },
];
