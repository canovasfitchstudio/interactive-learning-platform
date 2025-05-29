
import { CourseInfo, StepContent, Page } from './types';
import { LifebuoyIcon, BriefcaseIcon, ChatBubbleIcon, BrainIcon, VideoCameraIcon, CheckCircleIcon, XCircleIcon, InformationCircleIcon, ArrowPathIcon } from './components/IconComponents';

const COMMON_PLACEHOLDER_IMAGE_DIMENSIONS = "600/400";

export const CHOKING_FIRST_AID_STEPS: StepContent[] = [
  {
    title: "Step 1: Assess the Situation",
    details: [
      "Determine if the person is genuinely choking. Signs include clutching the throat, inability to talk or cough, difficulty breathing, skin, lips, and nails turning blue or dusky.",
      "Ask: 'Are you choking?' If they can speak, cough, or breathe, they might not be fully choking. Encourage them to cough.",
    ],
    image: `https://picsum.photos/seed/choke1/${COMMON_PLACEHOLDER_IMAGE_DIMENSIONS}`,
    icon: InformationCircleIcon,
  },
  {
    title: "Step 2: Confirm Choking & Call for Help",
    details: [
      "If the person cannot speak, cough, or breathe, they are likely choking.",
      "Immediately tell someone to call emergency services (e.g., 911, 112). If you are alone, start first aid first for 2 minutes then call.",
    ],
    image: `https://picsum.photos/seed/choke2/${COMMON_PLACEHOLDER_IMAGE_DIMENSIONS}`,
  },
  {
    title: "Step 3: 5 Back Blows",
    details: [
      "Stand to the side and slightly behind a choking adult. For a child, kneel down behind.",
      "Support the person's chest with one hand. Lean the person well forward so that the obstructing object comes out of their mouth rather than going further down.",
      "Give up to 5 sharp blows between their shoulder blades with the heel of your other hand.",
      "Common errors: Not leaning the person forward enough, not hitting hard enough, hitting on the spine.",
    ],
    image: `https://picsum.photos/seed/choke3/${COMMON_PLACEHOLDER_IMAGE_DIMENSIONS}`,
  },
  {
    title: "Step 4: 5 Abdominal Compressions (Heimlich Maneuver)",
    details: [
      "Stand behind the person. Wrap your arms around their waist.",
      "Make a fist with one hand. Place the thumb side of your fist against the middle of the person's abdomen, just above the navel and well below the breastbone.",
      "Grasp your fist with your other hand. Give up to 5 quick, upward and inward thrusts.",
    ],
    image: `https://picsum.photos/seed/choke4/${COMMON_PLACEHOLDER_IMAGE_DIMENSIONS}`,
    specialConsiderations: "For pregnant women or obese individuals: Give chest thrusts instead of abdominal thrusts. Place your fist on the center of the breastbone and give firm, backward thrusts.",
  },
  {
    title: "Step 5: Repeat Cycle",
    details: "Continue alternating between 5 back blows and 5 abdominal thrusts until the object is dislodged, the person can breathe or cough forcefully, or medical help arrives.",
    image: `https://picsum.photos/seed/choke5/${COMMON_PLACEHOLDER_IMAGE_DIMENSIONS}`,
    icon: ArrowPathIcon,
  },
  {
    title: "Step 6: If Person Loses Consciousness",
    details: [
      "Carefully lower the person to the floor.",
      "Immediately call emergency services if not already done.",
      "Begin Cardiopulmonary Resuscitation (CPR), even if you are not formally trained. Start with chest compressions.",
      "Each time you open the airway for rescue breaths (if trained), look for the object and remove it if visible.",
    ],
    image: `https://picsum.photos/seed/choke6/${COMMON_PLACEHOLDER_IMAGE_DIMENSIONS}`,
  },
  {
    title: "Step 7: Choking Infant (<1 Year)",
    details: [
      "Sit down and hold the infant facedown on your forearm, resting on your thigh. Support the infant's head and jaw with your hand.",
      "Give up to 5 gentle but firm back blows between the shoulder blades with the heel of your hand.",
      "If the object is not dislodged, turn the infant faceup on your forearm, resting on your thigh. Place two fingers in the center of the infant's chest just below the nipple line.",
      "Give up to 5 quick chest compressions (about 1.5 inches deep).",
      "Repeat back blows and chest thrusts until the object is dislodged or the infant becomes unresponsive. If unresponsive, start infant CPR.",
    ],
    image: `https://picsum.photos/seed/choke7/${COMMON_PLACEHOLDER_IMAGE_DIMENSIONS}`,
  },
  {
    title: "Step 8: Post-Incident Care & What NOT To Do",
    details: [
      "Even if the object is dislodged, the person should seek medical attention to ensure no internal injury or residual blockage.",
    ],
    icon: CheckCircleIcon,
    whatNotToDo: [
        "Do NOT perform a blind finger sweep. You could push the object further down.",
        "Do NOT panic. Try to remain calm and act decisively.",
        "Do NOT give liquids to a choking person.",
    ],
    image: `https://picsum.photos/seed/choke8/${COMMON_PLACEHOLDER_IMAGE_DIMENSIONS}`,
  },
];

export const CHOKING_SUMMARY = `
**Adults & Children (over 1 year):**
1.  **Assess:** Ask "Are you choking?"
2.  **Help:** Call emergency services.
3.  **5 Back Blows:** Lean forward, hit between shoulder blades.
4.  **5 Abdominal Thrusts:** Fist above navel, quick upward/inward thrusts.
5.  **Repeat:** Cycle until object out or help arrives.
6.  **Unconscious:** Start CPR.

**Infants (<1 year):**
1.  **5 Back Blows:** Facedown on forearm.
2.  **5 Chest Thrusts:** Faceup, two fingers on chest center.
3.  **Repeat:** Cycle until object out or infant unresponsive (then CPR).

**Special Cases:**
*   **Pregnant/Obese:** Use chest thrusts instead of abdominal thrusts.

**Always seek medical attention after a choking incident.**
`;


export const INTERVIEW_PREP_STEPS: StepContent[] = [
  {
    title: "Step 1: Pre-Interview Research",
    details: [
      "Thoroughly research the company: its mission, values, products/services, recent news, and culture.",
      "Understand the role: responsibilities, required skills, and how it fits into the organization.",
      "Research your interviewer(s) if possible (e.g., LinkedIn) to understand their background and role.",
    ],
    image: `https://picsum.photos/seed/interview1/${COMMON_PLACEHOLDER_IMAGE_DIMENSIONS}`,
    icon: InformationCircleIcon,
  },
  {
    title: "Step 2: Practice Your Answers",
    details: [
      "Prepare for common interview questions (e.g., 'Tell me about yourself,' 'Why are you interested in this role?').",
      "Use the STAR method (Situation, Task, Action, Result) to structure answers about your experiences and achievements.",
      "Identify your key strengths, achievements, and career goals and be ready to articulate them clearly.",
      "Practice out loud, possibly with a friend or in front of a mirror.",
    ],
    image: `https://picsum.photos/seed/interview2/${COMMON_PLACEHOLDER_IMAGE_DIMENSIONS}`,
  },
  {
    title: "Step 3: Logistics",
    details: [
      "Plan your attire: Professional and appropriate for the company culture. Ensure it's clean and neat.",
      "What to bring: Copies of your resume, a notepad and pen, list of questions to ask, and any portfolio items if relevant.",
      "For in-person interviews: Plan your route, check traffic, and aim to arrive 10-15 minutes early.",
      "For virtual interviews: Test your technology (internet, camera, microphone), choose a quiet, well-lit space with a neutral background.",
    ],
    image: `https://picsum.photos/seed/interview3/${COMMON_PLACEHOLDER_IMAGE_DIMENSIONS}`,
  },
  {
    title: "Step 4: Conduct During the Interview",
    details: [
      "Punctuality is key, whether in-person or virtual.",
      "Body Language: Maintain good eye contact, offer a firm handshake (if in-person), sit upright, and use open gestures. Smile and be engaging.",
      "Active Listening: Pay close attention to the interviewer, nod to show understanding, and don't interrupt.",
      "Speak clearly and confidently. Take a moment to think before answering complex questions.",
    ],
    image: `https://picsum.photos/seed/interview4/${COMMON_PLACEHOLDER_IMAGE_DIMENSIONS}`,
  },
  {
    title: "Step 5: Handling Tough Questions",
    details: [
      "Stay calm and composed. It's okay to take a brief pause to think.",
      "If a question is unclear, politely ask for clarification.",
      "For behavioral questions ('Tell me about a time when...'), use the STAR method.",
      "Be honest. If you don't know an answer, it's better to admit it than to make something up. You can offer to find out or explain how you would approach finding the answer.",
      "Turn negatives into positives: When discussing weaknesses or failures, focus on what you learned and how you improved.",
    ],
    image: `https://picsum.photos/seed/interview5/${COMMON_PLACEHOLDER_IMAGE_DIMENSIONS}`,
  },
  {
    title: "Step 6: Asking Your Own Questions",
    details: [
      "Prepare at least 2-3 thoughtful questions to ask the interviewer. This shows your engagement and interest.",
      "Good questions can be about the team, the role's challenges and opportunities, company culture, or the interviewer's experience at the company.",
      "Avoid asking questions that can be easily answered by a quick search on their website (unless seeking deeper insight).",
      "Do not ask about salary or benefits in the first interview unless the interviewer brings it up.",
    ],
    image: `https://picsum.photos/seed/interview6/${COMMON_PLACEHOLDER_IMAGE_DIMENSIONS}`,
  },
  {
    title: "Step 7: Post-Interview Follow-Up",
    details: [
      "Send a thank-you email or note within 24 hours of the interview.",
      "Reiterate your interest in the role and the company.",
      "Briefly mention something specific you discussed or enjoyed learning about.",
      "Proofread carefully before sending.",
    ],
    image: `https://picsum.photos/seed/interview7/${COMMON_PLACEHOLDER_IMAGE_DIMENSIONS}`,
    icon: CheckCircleIcon,
  },
];

export const INTERVIEW_QUESTIONS: string[] = [
  "Tell me about yourself.",
  "Why are you interested in this role?",
  "What are your strengths?",
  "What are your weaknesses?",
  "Describe a challenging situation you faced at work and how you handled it.",
  "Where do you see yourself in 5 years?",
  "Why should we hire you?",
  "Tell me about a time you failed.",
  "How do you handle stress or pressure?",
  "Do you have any questions for me?"
];

export const HABIT_FORMATION_STEPS: StepContent[] = [
  {
    title: "1. The Triggering Stimulus",
    details: "An external or internal cue that signals the brain to go into an automatic mode and which habit to use.",
    visualDescription: "A light bulb turning on, representing an idea or cue.",
    image: `https://picsum.photos/seed/habit1/${COMMON_PLACEHOLDER_IMAGE_DIMENSIONS}`,
  },
  {
    title: "2. The Initial Reaction (Neural Pathway)",
    details: "The brain activates a specific neural pathway in response to the trigger. Initially, this pathway might be weak.",
    visualDescription: "A faint, thin line representing a new neural connection.",
    image: `https://picsum.photos/seed/habit2/${COMMON_PLACEHOLDER_IMAGE_DIMENSIONS}`,
  },
  {
    title: "3. Dopamine Explosion (Reward)",
    details: "Performing the behavior associated with the cue leads to a release of dopamine, creating a sense of pleasure or satisfaction. This is the reward.",
    visualDescription: "Bright sparks or stars, symbolizing dopamine release and reward.",
    image: `https://picsum.photos/seed/habit3/${COMMON_PLACEHOLDER_IMAGE_DIMENSIONS}`,
  },
  {
    title: "4. Neuronal Reinforcement",
    details: "The dopamine reward reinforces the neural pathway, making it stronger and more likely to be activated in the future when the trigger appears.",
    visualDescription: "The neural pathway line becoming thicker and brighter.",
    image: `https://picsum.photos/seed/habit4/${COMMON_PLACEHOLDER_IMAGE_DIMENSIONS}`,
  },
  {
    title: "5. Constant Repetition",
    details: "Each time the trigger-behavior-reward cycle is repeated, the neural pathway is further consolidated and strengthened.",
    visualDescription: "Multiple parallel lines or a deepening groove, indicating repetition.",
    image: `https://picsum.photos/seed/habit5/${COMMON_PLACEHOLDER_IMAGE_DIMENSIONS}`,
  },
  {
    title: "6. Total Automation",
    details: "With enough repetition, the behavior becomes automatic. The brain expends less energy to perform the habit.",
    visualDescription: "The neural pathway is now a wide, well-defined highway, with smooth traffic flow.",
    image: `https://picsum.photos/seed/habit6/${COMMON_PLACEHOLDER_IMAGE_DIMENSIONS}`,
  },
  {
    title: "7. Result: Habit Formed",
    details: "The behavior is now a deeply ingrained habit, a 'neuronal highway' that activates almost effortlessly in response to the trigger.",
    visualDescription: "A prominent, established 'highway' in the brain icon, with a checkmark or star.",
    image: `https://picsum.photos/seed/habit7/${COMMON_PLACEHOLDER_IMAGE_DIMENSIONS}`,
    icon: CheckCircleIcon,
  },
];


export const COURSES: CourseInfo[] = [
  {
    id: 'choking-first-aid',
    title: "First Aid for Choking",
    description: "Learn crucial steps to help someone who is choking. Covers adults, children, and infants.",
    path: Page.ChokingFirstAid,
    steps: CHOKING_FIRST_AID_STEPS,
    summary: CHOKING_SUMMARY,
    icon: LifebuoyIcon,
  },
  {
    id: 'interview-prep',
    title: "Interview Preparation Guide",
    description: "A step-by-step guide to ace your next job interview, from research to follow-up.",
    path: Page.InterviewPrep,
    steps: INTERVIEW_PREP_STEPS,
    icon: BriefcaseIcon,
  },
  {
    id: 'interview-simulator',
    title: "Interactive Interview Simulator",
    description: "Practice answering common interview questions and get AI-powered feedback.",
    path: Page.InterviewSimulator,
    interviewQuestions: INTERVIEW_QUESTIONS,
    icon: ChatBubbleIcon,
  },
  {
    id: 'habit-formation',
    title: "Habit Formation in the Brain",
    description: "Visualize how habits are formed through a step-by-step animated concept.",
    path: Page.HabitFormation,
    steps: HABIT_FORMATION_STEPS,
    icon: BrainIcon,
  },
  {
    id: 'video-gen',
    title: "AI Video Generation (Concept)",
    description: "Conceptual feature: Use AI to generate short video clips to enhance learning content.",
    path: Page.VideoGen,
    icon: VideoCameraIcon,
  },
];
