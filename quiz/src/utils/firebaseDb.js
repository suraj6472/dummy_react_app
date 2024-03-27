import app from "./firebase";
import { getFirestore, addDoc, collection, getDocs } from "firebase/firestore";
import { query } from "firebase/firestore";

const db = getFirestore(app);

const fetchTestQuestionsHandler = async (filters) => {
  const querySnapshot = await getDocs(query(collection(db, "questions")));
  let filteredQuestions = [];
  querySnapshot.forEach((doc) => {
    filteredQuestions.push({ ...doc.data(), id: doc.id });
  });
  for (let filter in filters) {
    if (filters[filter].length && filter !== "questions") {
      filteredQuestions = filteredQuestions.filter((question) => {
        return question[filter] === filters[filter];
      });
    }
  }
  filteredQuestions =
    filteredQuestions.length >= filters.questions
      ? filteredQuestions.slice(0, filters.questions)
      : false;
  return filteredQuestions;
};

const createTopicHandler = async (topic) => {
  try {
    return await addDoc(collection(db, "topics"), { name: topic.name });
  } catch (e) {
    console.error("Error adding document: ", e);
    throw new Error("Failed to add topic");
  }
};

const fetchTopicsHandler = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "topics"));
    const fetchedData = [];
    querySnapshot.forEach((doc) => {
      fetchedData.push({ id: doc.id, ...doc.data() });
    });
    return fetchedData;
  } catch (error) {
    console.error("Error fetching data: ", error);
  }
};

const addQuestionHandler = async (question) => {
  try {
    return await addDoc(collection(db, "questions"), { ...question });
  } catch (e) {
    console.error("Error adding document: ", e);
    throw new Error("Failed to add topic");
  }
};

const fetchQuestionsHandler = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "questions"));
    const fetchedData = [];
    querySnapshot.forEach((doc) => {
      fetchedData.push({ id: doc.id, ...doc.data() });
    });
    const topics = await fetchTopicsHandler();
    return fetchedData.map((data) => {
      return {
        ...data,
        topic:
          topics.find((topic) => topic.id === data.topic)?.name ||
          "Unknown Topic",
      };
    });
  } catch (error) {
    console.error("Error fetching data: ", error);
  }
};

const firebaseAction = {
  addTopic: createTopicHandler,
  getTopics: fetchTopicsHandler,
  addQuestion: addQuestionHandler,
  getQuestions: fetchQuestionsHandler,
  filterTestQuestions: fetchTestQuestionsHandler,
};

export default firebaseAction;
