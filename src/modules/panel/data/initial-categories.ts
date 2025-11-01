// Initial Data

import {
	Award,
	CheckCircle2,
	Target,
	TrendingUp,
	Users,
	Zap,
} from "lucide-react";
import type { Category } from "@/modules/panel/types";

export const initialCategories: Record<string, Category> = {
	commitment: {
		id: "commitment",
		name: "Compromisso",
		icon: Target,
		color: "bg-blue-500",
		tasks: [
			{
				id: "c1",
				action:
					"Criar e revisar planejamento semanal com metas técnicas (segunda-feira)",
				priority: "high",
				deadline: "11/11/25",
				status: "not_started",
				evidence: "",
				feedback: "",
			},
			{
				id: "c2",
				action: "Atualizar status das tasks diariamente no Jira / Notion",
				priority: "high",
				deadline: "Recorrente",
				status: "not_started",
				evidence: "",
				feedback: "",
			},
			{
				id: "c3",
				action:
					"Documentar imprevistos técnicos e soluções (ex: bloqueios, bugs)",
				priority: "medium",
				deadline: "30/11/25",
				status: "not_started",
				evidence: "",
				feedback: "",
			},
			{
				id: "c4",
				action:
					"Revisar entregas com prazos realistas e justificativas antecipadas",
				priority: "high",
				deadline: "30/11/25",
				status: "not_started",
				evidence: "",
				feedback: "",
			},
		],
	},
	communication: {
		id: "communication",
		name: "Comunicação",
		icon: Users,
		color: "bg-green-500",
		tasks: [
			{
				id: "co1",
				action:
					'Aplicar formato "Contexto → Ação → Próximo passo" em comunicações técnicas',
				priority: "high",
				deadline: "18/11/25",
				status: "not_started",
				evidence: "",
				feedback: "",
			},
			{
				id: "co2",
				action:
					"Fazer check-in diário no canal do time com progresso e próximos passos",
				priority: "high",
				deadline: "Recorrente",
				status: "not_started",
				evidence: "",
				feedback: "",
			},
			{
				id: "co3",
				action: "Compartilhar aprendizado técnico sobre testes no chapter",
				priority: "medium",
				deadline: "10/12/25",
				status: "not_started",
				evidence: "",
				feedback: "",
			},
			{
				id: "co4",
				action:
					'Escrever artigo interno: "Implementação de testes e2e com Playwright"',
				priority: "high",
				deadline: "25/01/26",
				status: "not_started",
				evidence: "",
				feedback: "",
			},
		],
	},
	quality: {
		id: "quality",
		name: "Qualidade",
		icon: CheckCircle2,
		color: "bg-purple-500",
		tasks: [
			{
				id: "q1",
				action: "Configurar Vitest e Supertest em 2 módulos backend",
				priority: "high",
				deadline: "25/11/25",
				status: "not_started",
				evidence: "",
				feedback: "",
			},
			{
				id: "q2",
				action: "Substituir Cypress por Playwright em 1 projeto front-end",
				priority: "high",
				deadline: "10/12/25",
				status: "not_started",
				evidence: "",
				feedback: "",
			},
			{
				id: "q3",
				action: "Criar checklist de qualidade (lint, testes, revisões)",
				priority: "medium",
				deadline: "30/11/25",
				status: "not_started",
				evidence: "",
				feedback: "",
			},
			{
				id: "q4",
				action: "Atingir cobertura mínima de 60% em testes unitários",
				priority: "high",
				deadline: "10/01/26",
				status: "not_started",
				evidence: "",
				feedback: "",
			},
		],
	},
	delivery: {
		id: "delivery",
		name: "Entrega de Resultados",
		icon: Zap,
		color: "bg-yellow-500",
		tasks: [
			{
				id: "d1",
				action:
					"Estimar tasks considerando complexidade e margem de testes (+15%)",
				priority: "medium",
				deadline: "Recorrente",
				status: "not_started",
				evidence: "",
				feedback: "",
			},
			{
				id: "d2",
				action:
					'Criar registro técnico de aprendizados por sprint ("Lessons Learned")',
				priority: "high",
				deadline: "15/12/25",
				status: "not_started",
				evidence: "",
				feedback: "",
			},
			{
				id: "d3",
				action:
					"Destacar entregas com impacto (testes, performance, integrações)",
				priority: "high",
				deadline: "30/01/26",
				status: "not_started",
				evidence: "",
				feedback: "",
			},
		],
	},
	ownership: {
		id: "ownership",
		name: "Ownership",
		icon: Award,
		color: "bg-orange-500",
		tasks: [
			{
				id: "o1",
				action: "Mapear gargalo técnico e sugerir melhoria de arquitetura",
				priority: "medium",
				deadline: "15/12/25",
				status: "not_started",
				evidence: "",
				feedback: "",
			},
			{
				id: "o2",
				action: "Criar script ou automação para setup de testes",
				priority: "high",
				deadline: "15/01/26",
				status: "not_started",
				evidence: "",
				feedback: "",
			},
			{
				id: "o3",
				action: "Documentar decisões técnicas em PRs / Notion",
				priority: "high",
				deadline: "Recorrente",
				status: "not_started",
				evidence: "",
				feedback: "",
			},
		],
	},
	impact: {
		id: "impact",
		name: "Impacto",
		icon: TrendingUp,
		color: "bg-red-500",
		tasks: [
			{
				id: "i1",
				action:
					"Ajudar colegas juniores na configuração de testes e boas práticas",
				priority: "medium",
				deadline: "10/12/25",
				status: "not_started",
				evidence: "",
				feedback: "",
			},
			{
				id: "i2",
				action: "Participar ativamente de PR reviews e discussões técnicas",
				priority: "high",
				deadline: "Recorrente",
				status: "not_started",
				evidence: "",
				feedback: "",
			},
			{
				id: "i3",
				action:
					'Realizar talk técnica: "Introdução prática a testes automatizados"',
				priority: "high",
				deadline: "25/01/26",
				status: "not_started",
				evidence: "",
				feedback: "",
			},
		],
	},
};
