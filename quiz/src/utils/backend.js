const getProfileData = async () => {
  const responseBody = await fetch("http://127.0.0.1:8000/api/profile", {
    method: "get",
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
      "Content-Type": "application/json",
    },
  });
  if (responseBody.ok) {
    return await responseBody.json();
  }
  return null;
};

const fetchTopicsHandler = async () => {
  const responseBody = await fetch("http://127.0.0.1:8000/api/topics", {
    method: "get",
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
      "Content-Type": "application/json",
    },
  });
  if (responseBody.ok) {
    const response = await responseBody.json();
    return response.data;
  }
};

const createTopicHandler = async (topic) => {
  const responseBody = await fetch("http://127.0.0.1:8000/api/topics", {
    method: "post",
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
      "Content-Type": "application/json",
    },
    body: JSON.stringify(topic),
  });
  if (responseBody.ok) {
    const response = await responseBody.json();
    return response.data;
  }
};

const fetchQuestionsHandler = async () => {
  const responseBody = await fetch("http://127.0.0.1:8000/api/questions", {
    method: "get",
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
      "Content-Type": "application/json",
    },
  });
  if (responseBody.ok) {
    const response = await responseBody.json();
    console.log(response.data);
    return response.data;
  }
};

const addQuestionHandler = async (question) => {
  const responseBody = await fetch("http://127.0.0.1:8000/api/questions", {
    method: "post",
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
      "Content-Type": "application/json",
    },
    body: JSON.stringify(question),
  });
  if (responseBody.ok) {
    const response = await responseBody.json();
    console.log(response.data);
    return response.data;
  }
};

const fetchFilteredTestQuestionsHandler = async (filter) => {
  const responseBody = await fetch(
    "http://127.0.0.1:8000/api/filter-questions",
    {
      method: "post",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
        "Content-Type": "application/json",
      },
      body: JSON.stringify(filter),
    }
  );
  if (responseBody.ok) {
    return await responseBody.json();
  }
};

const fetchTestQuestionsHandler = async (test) => {
  const responseBody = await fetch(
    "http://127.0.0.1:8000/api/get-test-questions",
    {
      method: "post",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
        "Content-Type": "application/json",
      },
      body: JSON.stringify(test),
    }
  );
  if (responseBody.ok) {
    return await responseBody.json();
  }
};

const saveUserAnswers = async (userAnswer) => {
  const responseBody = await fetch("http://127.0.0.1:8000/api/finish-test", {
    method: "post",
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userAnswer),
  });
  if (responseBody.ok) {
    return await responseBody.json();
  }
};

const fetchTestResultData = async (test_id) => {
  const responseBody = await fetch(
    `http://127.0.0.1:8000/api/view-attempted-test/${test_id}`,
    {
      method: "post",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
        "Content-Type": "application/json",
      },
    }
  );
  if (responseBody.ok) {
    return await responseBody.json();
  }
};

const fetchTestList = async () => {
  const responseBody = await fetch(
    `http://127.0.0.1:8000/api/tests`,
    {
      method: "get",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
        "Content-Type": "application/json",
      },
    }
  );
  if (responseBody.ok) {
    return await responseBody.json();
  }
};

const backendAction = {
  getProfile: getProfileData,
  addTopic: createTopicHandler,
  getTopics: fetchTopicsHandler,
  addQuestion: addQuestionHandler,
  getQuestions: fetchQuestionsHandler,
  filterTestQuestions: fetchFilteredTestQuestionsHandler,
  getTestQuestions: fetchTestQuestionsHandler,
  saveAnswers: saveUserAnswers,
  viewTestResult: fetchTestResultData,
  getTests: fetchTestList,
};

export default backendAction;
