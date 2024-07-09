interface TaskType {
    taskId: string;
    taskName: string;
    taskDesc: string;
}

function MenuConteudo() {
    const [taskName, setTaskName] = useState<string>('');
    const [taskDesc, setTaskDesc] = useState<string>('');
    const [tasks, setTasks] = useState<TaskType[]>([]);

    function handleNameChange(event: React.ChangeEvent<HTMLInputElement>) {
        setTaskName(event.target.value);
    }

    function handleDescChange(event: React.ChangeEvent<HTMLInputElement>) {
        setTaskDesc(event.target.value);
    }

    function createTask() {
        if (taskName && taskDesc) {
            const newTask = {
                taskId: uuid(),
                taskName,
                taskDesc,
            };
            setTasks([...tasks, newTask]);
            clearInputs();
        }
    }

    function deleteTask(taskId: string) {
        setTasks(tasks.filter(task => task.taskId !== taskId));
    }

    function clearInputs() {
        setTaskName('');
        setTaskDesc('');
    }








    return (
        <Container>
            <Row className='left' style={{ backgroundColor: "#E6E8FA", width: '50%' }}>
                <Col>
                    <StyledForm onSubmit={(e) => { e.preventDefault(); createTask(); }}>
                        <h1>Lista de Tarefas</h1>
                        <FormGroup controlId="formGridName">
                            <Form.Label>Nome</Form.Label>
                            <FormInput type="text" placeholder="Coloque seu Nome" value={taskName} onChange={handleNameChange} />
                        </FormGroup>
                        <FormGroup controlId="formGridDescription">
                            <Form.Label>Descrição</Form.Label>
                            <FormInput type="text" placeholder="Descreva a Tarefa" value={taskDesc} onChange={handleDescChange} />
                        </FormGroup>
                        <ButtomDefaultStyled type="submit">Salvar</ButtomDefaultStyled>
                    </StyledForm>
                </Col>
            </Row>
            <Row style={{ backgroundColor: "whitesmoke", width: '50%' }}>
                {tasks.map((task) => (
                    <Col key={task.taskId}>
                        <h3>{task.taskName}</h3>
                        <p>{task.taskDesc}</p>
                        <ButtomDefaultStyled onClick={() => deleteTask(task.taskId)}>Apagar</ButtomDefaultStyled>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}


