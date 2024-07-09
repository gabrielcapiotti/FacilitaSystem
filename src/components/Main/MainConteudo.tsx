import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Row, Col, Form } from 'react-bootstrap';
import Conteudo, { StyledRow } from './MainStyled';
import StyledForm, { FormGroup, FormInput, SubmitButton } from '../components/Formulario/Formulario';
import { ButtomDefaultStyled } from '../components/ButtomDefault/ButtomDefaultStyled';
import { v4 as uuid } from 'uuid';

interface TaskType {
    taskId: string;
    taskName: string;
    taskDesc: string;
}

interface SubmissionType {
    TaskName: string;
    TaskDescription: string;
}

function MenuConteudo() {
    const [taskName, setTaskName] = useState('');
    const [taskDesc, setTaskDesc] = useState('');
    const [tasks, setTasks] = useState<TaskType[]>([]);
    const [editId, setEditId] = useState<string | null>(null);
    const [submissionLog, setSubmissionLog] = useState<SubmissionType[]>([]);
    const apiUrl = "http://localhost:3000/tasks";

    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = async () => {
        try {
            const response = await axios.get(apiUrl);
            setTasks(response.data);
        } catch (error) {
            console.error("Failed to fetch tasks", error);
        }
    };

    function handleNameChange(event: React.ChangeEvent<HTMLInputElement>) {
        setTaskName(event.target.value);
    }

    function handleDescChange(event: React.ChangeEvent<HTMLInputElement>) {
        setTaskDesc(event.target.value);
    }

    function createTask(event: React.FormEvent) {
        event.preventDefault();
        if (!taskName || !taskDesc) return;

        const taskData = { taskName, taskDesc };
        const method = editId ? 'put' : 'post';
        const url = editId ? `${apiUrl}/${editId}` : apiUrl;

        axios[method](url, taskData)
            .then(response => {
                const updatedTasks = editId ? tasks.map(task => task.taskId === editId ? response.data.task : task) : [...tasks, response.data.task];
                setTasks(updatedTasks);

                // Prepara o novo log de submissão
                const newLogEntry = { TaskName: taskName, TaskDescription: taskDesc };

                // Atualizar o log de submissões com os valores finais
                setSubmissionLog(prevLog => [...prevLog, newLogEntry]);

                // Limpar os inputs
                clearInputs();
            })
            .catch(error => {
                console.error("Failed to submit task", error);
                alert("Failed to save the task!");
            });
    }

    // Usar useEffect para logar a cada atualização do log de submissões
    useEffect(() => {
        if (submissionLog.length > 0) {
            console.log(submissionLog);
        }
    }, [submissionLog]);



    function selectForEdit(taskId: string) {
        const task = tasks.find(task => task.taskId === taskId);
        if (task) {
            setTaskName(task.taskName);
            setTaskDesc(task.taskDesc);
            setEditId(taskId);
        } else {
            // Aqui você pode adicionar uma mensagem de erro que será exibida na interface do usuário
            console.error("Task not found for edit", taskId);
            alert("Task not found. Please refresh the list or try again."); // Uma simples notificação para o usuário
        }
    }



    function deleteTask(taskId: string) {
        const taskToDelete = tasks.find(task => task.taskId === taskId); // Encontrar a tarefa antes de deletar

        axios.delete(`${apiUrl}/${taskId}`)
            .then(response => {
                if (response.status === 200) {
                    // Se a tarefa for encontrada, logar suas informações
                    if (taskToDelete) {
                        console.log("Task deleted successfully:", taskToDelete);
                    } else {
                        console.log("No task found with ID:", taskId);
                    }

                    // Atualizar o estado para remover a tarefa
                    setTasks(tasks.filter(task => task.taskId !== taskId));
                } else {
                    console.error("Response received but task might not have been deleted:", response);
                }
            })
            .catch(error => {
                console.error(`Failed to delete task ${taskId}`, error);
                alert("Failed to delete the task!"); // Notifica o usuário em caso de falha
            });
    }



    function clearInputs() {
        setTaskName('');
        setTaskDesc('');
        setEditId(null);
    }

    return (
        <Conteudo>
            <Row className='left' style={{ backgroundColor: "#E6E8FA", height: '100%', width: '50%' }}>
                <Col>
                    <StyledForm onSubmit={createTask}>
                        <Row className="mb-3">
                            <Col md={6}>
                                <h1>{editId ? 'Editar Tarefa' : 'Lista de Tarefas'}</h1>
                                <FormGroup controlId="formGridName">
                                    <Form.Label>Título</Form.Label>
                                    <FormInput type="text" placeholder="Título da Tarefa" value={taskName} onChange={handleNameChange} />
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup controlId="formGridDescription">
                                    <Form.Label>Descrição</Form.Label>
                                    <FormInput type="text" placeholder="Descreva a Tarefa" value={taskDesc} onChange={handleDescChange} />
                                </FormGroup>
                            </Col>
                        </Row>
                        <ButtomDefaultStyled type="submit">{editId ? 'Atualizar' : 'Salvar'}</ButtomDefaultStyled>
                        {editId && <ButtomDefaultStyled onClick={clearInputs}>Cancelar</ButtomDefaultStyled>}
                    </StyledForm>
                </Col>
            </Row>
            <StyledRow>
                {tasks.map(task => (
                    <Col key={task.taskId} style={{ width: '50%', height: 'auto', display: 'inline-block', alignItems: 'center', justifyContent: 'start' }}>
                        <h2>{task.taskName}</h2>
                        <p>{task.taskDesc}</p>
                        <ButtomDefaultStyled onClick={() => deleteTask(task.taskId)}>Apagar</ButtomDefaultStyled>
                        <ButtomDefaultStyled onClick={() => selectForEdit(task.taskId)}>Editar</ButtomDefaultStyled>
                    </Col>
                ))}
            </StyledRow>
        </Conteudo>
    );
}

export default MenuConteudo;
