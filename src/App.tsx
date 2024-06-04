import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import './index.css'; // Ensure this path is correct

const App = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('darkMode');
    return savedTheme === 'true' || savedTheme === null; // Default to true if no preference is found
  });

  const [answer, setAnswer] = useState("");
  const [expression, setExpression] = useState("");
  const et = expression.trim();

  const isOperator = (symbol: string) => {
    return /[*/+-]/.test(symbol);
  };

  const buttonPress = (symbol: string) => {
    if (symbol === "clear") {
      setAnswer("");
      setExpression("0");
    } else if (symbol === "negative") {
      if (answer === "") return;
      setAnswer(
        answer.toString().charAt(0) === "-" ? answer.slice(1) : "-" + answer
      );
    } else if (symbol === "percent") {
      if (answer === "") return;
      setAnswer((parseFloat(answer) / 100).toString());
    } else if (isOperator(symbol)) {
      setExpression(et + " " + symbol + " ");
    } else if (symbol === "=") {
      calculate();
    } else if (symbol === "0") {
      if (expression.charAt(0) !== "0") {
        setExpression(expression + symbol);
      }
    } else if (symbol === ".") {
      // split by operators and get last number
      const lastNumber = expression.split(/[-+/*]/g).pop();
      if (!lastNumber) return;
      console.log("lastNumber :>> ", lastNumber);
      // if last number already has a decimal, don't add another
      if (lastNumber?.includes(".")) return;
      setExpression(expression + symbol);
    } else {
      if (expression.charAt(0) === "0") {
        setExpression(expression.slice(1) + symbol);
      } else {
        setExpression(expression + symbol);
      }
    }
  };

  const calculate = () => {
    // if last char is an operator, do nothing
    if (isOperator(et.charAt(et.length - 1))) return;
    // clean the expression so that two operators in a row uses the last operator
    // 5 * - + 5 = 10
    const parts = et.split(" ");
    const newParts = [];

    // go through parts backwards
    for (let i = parts.length - 1; i >= 0; i--) {
      if (["*", "/", "+"].includes(parts[i]) && isOperator(parts[i - 1])) {
        newParts.unshift(parts[i]);
        let j = 0;
        let k = i - 1;
        while (isOperator(parts[k])) {
          k--;
          j++;
        }
        i -= j;
      } else {
        newParts.unshift(parts[i]);
      }
    }
    const newExpression = newParts.join(" ");
    if (isOperator(newExpression.charAt(0))) {
      setAnswer(eval(answer + newExpression) as string);
    } else {
      setAnswer(eval(newExpression) as string);
    }
    setExpression("");
  };

  const toggleTheme = () => {
    setDarkMode(prevMode => {
      const newMode = !prevMode;
      localStorage.setItem('darkMode', newMode.toString());
      return newMode;
    });
  };

  useEffect(() => {
    document.body.className = darkMode ? 'dark-mode' : '';
  }, [darkMode]);

  return (
    <Container className={`d-flex flex-column align-items-center justify-content-center vh-100 custom-container`}>
      <Row className="w-100 mb-2">
        <Col className="d-flex justify-content-end">
          <Button onClick={toggleTheme} variant={darkMode ? 'light' : 'dark'}>
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </Button>
        </Col>
      </Row>
      <Row className="w-100 mb-4">
        <Col>
          <h1 className="text-center">Calculator Application</h1>
        </Col>
      </Row>
      <div id="calculator" className="border rounded p-3">
        <div id="display" className={`text-right mb-3 border rounded p-2 ${darkMode ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
          <div id="answer">{answer}</div>
          <div id="expression">{expression}</div>
        </div>
        <Stack gap={2}>
          <Row className="mb-1">
            <Col><Button id="clear" variant="danger" onClick={() => buttonPress("clear")} className="w-100 equal-width-button">C</Button></Col>
            <Col><Button id="negative" variant="primary" onClick={() => buttonPress("negative")} className="w-100 equal-width-button">+/-</Button></Col>
            <Col><Button id="percentage" variant="primary" onClick={() => buttonPress("percentage")} className="w-100 equal-width-button">%</Button></Col>
            <Col><Button id="divide" variant="warning" onClick={() => buttonPress("/")} className="w-100 equal-width-button">/</Button></Col>
          </Row>
          <Row className="mb-1">
            <Col><Button id="seven" variant={darkMode ? 'secondary' : 'dark'} onClick={() => buttonPress("7")} className="w-100">7</Button></Col>
            <Col><Button id="eight" variant={darkMode ? 'secondary' : 'dark'} onClick={() => buttonPress("8")} className="w-100">8</Button></Col>
            <Col><Button id="nine" variant={darkMode ? 'secondary' : 'dark'} onClick={() => buttonPress("9")} className="w-100">9</Button></Col>
            <Col><Button id="multiply" variant="warning" onClick={() => buttonPress("*")} className="w-100">*</Button></Col>
          </Row>
          <Row className="mb-1">
            <Col><Button id="four" variant={darkMode ? 'secondary' : 'dark'} onClick={() => buttonPress("4")} className="w-100">4</Button></Col>
            <Col><Button id="five" variant={darkMode ? 'secondary' : 'dark'} onClick={() => buttonPress("5")} className="w-100">5</Button></Col>
            <Col><Button id="six" variant={darkMode ? 'secondary' : 'dark'} onClick={() => buttonPress("6")} className="w-100">6</Button></Col>
            <Col><Button id="subtract" variant="warning" onClick={() => buttonPress("-")} className="w-100">-</Button></Col>
          </Row>
          <Row className="mb-1">
            <Col><Button id="one" variant={darkMode ? 'secondary' : 'dark'} onClick={() => buttonPress("1")} className="w-100">1</Button></Col>
            <Col><Button id="two" variant={darkMode ? 'secondary' : 'dark'} onClick={() => buttonPress("2")} className="w-100">2</Button></Col>
            <Col><Button id="three" variant={darkMode ? 'secondary' : 'dark'} onClick={() => buttonPress("3")} className="w-100">3</Button></Col>
            <Col><Button id="add" variant="warning" onClick={() => buttonPress("+")} className="w-100">+</Button></Col>
          </Row>
          <Row className="mb-1">
            <Col xs={6}><Button id="zero" variant={darkMode ? 'secondary' : 'dark'} onClick={() => buttonPress("0")} className="w-100 wide-button">0</Button></Col>
            <Col xs={3}><Button id="decimal" variant={darkMode ? 'secondary' : 'dark'} onClick={() => buttonPress(".")} className="w-100">.</Button></Col>
            <Col xs={3}><Button id="equals" variant={darkMode ? 'secondary' : 'dark'} onClick={() => buttonPress("=")} className="w-100">=</Button></Col>
          </Row>
        </Stack>
      </div>
    </Container>
  );
};

export default App;
