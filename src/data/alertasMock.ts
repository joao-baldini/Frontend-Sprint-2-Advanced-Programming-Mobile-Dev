import { Alerta } from "../types/Alerta";

export const alertasMock: Alerta[] = [
  { id:1, tipo:"SEM_CAPACETE", descricao:"Funcionário detectado sem capacete de proteção na linha de produção 3.", nivelSeveridade:"ALTO", localizacao:"LINHA_PRODUCAO_3", cameraId:"CAM-003", status:"ABERTO", dataHoraAlerta:"2026-05-21T14:30:00", dataHoraRegistro:"2026-05-21T14:30:05" },
  { id:2, tipo:"ZONA_PERIGOSA", descricao:"Operador se aproximou da zona de exclusão da prensa hidráulica.", nivelSeveridade:"CRITICO", localizacao:"SETOR_B", cameraId:"CAM-007", status:"EM_ANALISE", dataHoraAlerta:"2026-05-21T13:15:00", dataHoraRegistro:"2026-05-21T13:15:03" },
  { id:3, tipo:"POSTURA_RISCO", descricao:"Postura ergonômica de risco detectada durante levantamento de carga.", nivelSeveridade:"MEDIO", localizacao:"ALMOXARIFADO", cameraId:"CAM-001", status:"RESOLVIDO", dataHoraAlerta:"2026-05-21T11:00:00", dataHoraRegistro:"2026-05-21T11:00:08" },
  { id:4, tipo:"SEM_COLETE", descricao:"Funcionário sem colete refletivo na área de movimentação de empilhadeiras.", nivelSeveridade:"ALTO", localizacao:"PATIO_LOGISTICA", cameraId:"CAM-010", status:"ABERTO", dataHoraAlerta:"2026-05-21T09:45:00", dataHoraRegistro:"2026-05-21T09:45:02" },
  { id:5, tipo:"SEM_LUVA", descricao:"Operador manuseando peças sem luvas de proteção química.", nivelSeveridade:"BAIXO", localizacao:"LABORATORIO_QUIMICO", cameraId:"CAM-005", status:"IGNORADO", dataHoraAlerta:"2026-05-20T16:20:00", dataHoraRegistro:"2026-05-20T16:20:04" },
];