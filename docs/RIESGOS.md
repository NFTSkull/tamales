# ANÁLISIS DE RIESGOS - CALLITAE Website

## RIESGOS TÉCNICOS

### R1: Recursos de Imagen Faltantes
**Probabilidad**: Alta  
**Impacto**: Alto  
**Descripción**: Dependencia de archivos adjuntos no recibidos (logos, fotos)  
**Mitigación Perfectiva**: 
- Crear placeholders temporales
- Usar imágenes de stock o generadas con IA como backup
- Documentar claramente los recursos pendientes

**Mitigación Reactiva**:
- Solicitar recursos nuevamente al cliente
- Usar versiones provisionales hasta recibir finales

### R2: Especificaciones de Colores/Tipografía Incompletas
**Probabilidad**: Media  
**Impacto**: Medio  
**Descripción**: Manual de identidad visual no recibido completamente  
**Mitigación Perfectiva**:
- Investigar estándares de diseño para negocios de comida mexicana
- Crear paleta de colores temporal basada en industria
- Documentar decisiones tomadas en DEVLOG

**Mitigación Reactiva**:
- Crear versión inicial con colores comunes
- Permitir ajustes posteriores cuando lleguen especificaciones

### R3: Información de Contacto Faltante
**Probabilidad**: Alta  
**Impacto**: Alto  
**Descripción**: Dirección, teléfono, email, horarios no proporcionados  
**Mitigación Perfectiva**:
- Crear sección de contacto con placeholders claros
- Usar campos genéricos tipo: "contacto@callitae.com"
- Documentar información pendiente

**Mitigación Reactiva**:
- Solicitar información prioritaria
- Implementar formulario genérico como alternativa

---

## RIESGOS DE CONTENIDO

### R4: Precios No Definidos
**Probabilidad**: Alta  
**Impacto**: Medio  
**Descripción**: No se proporcionaron precios de productos  
**Mitigación Perfectiva**:
- No mostrar precios en primera versión
- Agregar mensaje "Precios consultar"
- Implementar opción de solicitar cotización

**Mitigación Reactiva**:
- Agregar precios posteriormente cuando se definan
- Incluir calculadora de cotización para pedidos personalizados

### R5: Promociones Pendientes
**Probabilidad**: Media  
**Impacto**: Bajo  
**Descripción**: Ofertas y paquetes no definidos  
**Mitigación Perfectiva**:
- Crear estructura preparada para futuras promociones
- Diseñar cards de ofertas que puedan activarse después
- No mostrar sección hasta tener contenido

**Mitigación Reactiva**:
- Agregar sección cuando información esté disponible

---

## RIESGOS DE DESARROLLO

### R6: Sobre-especificación vs. Información Incompleta
**Probabilidad**: Media  
**Impacto**: Medio  
**Descripción**: Mucha información conceptual, información técnica faltante  
**Mitigación Perfectiva**:
- Priorizar MVF (Minimum Viable Features)
- Crear versiones incrementales
- Documentar TODOS los supuestos en DEVLOG

**Mitigación Reactiva**:
- Revisar con cliente versiones iterativas
- Ajustar scope según feedback

### R7: Optimización de Imágenes Existentes
**Probabilidad**: Alta  
**Impacto**: Medio  
**Descripción**: Fotos tomadas con celular pueden requerir mucho trabajo  
**Mitigación Perfectiva**:
- Usar herramientas de optimización automática
- Implementar lazy loading
- Considerar reemplazo con imágenes de IA

**Mitigación Reactiva**:
- Proponer mejoras visuales al cliente
- Generar imágenes nuevas con IA si es aprobado

---

## RIESGOS DE ENTREGA

### R8: Expectativas de Calidad vs. Recursos
**Probabilidad**: Media  
**Impacto**: Alto  
**Descripción**: Expectativa de alta calidad con recursos limitados  
**Mitigación Perfectiva**:
- Comunicar claramente estado del proyecto
- Mostrar demos progresivos
- Establecer límites de scope

**Mitigación Reactiva**:
- Recopilar feedback temprano
- Ajustar presupuesto/tiempo si es necesario
- Priorizar funcionalidades críticas

### R9: Cambios de Requisitos Durante Desarrollo
**Probabilidad**: Media  
**Impacto**: Medio  
**Descripción**: Posibles cambios o agregados no contemplados inicialmente  
**Mitigación Perfectiva**:
- Documentar todos los requisitos iniciales
- Crear estructura flexible
- Usar metodología ágil con sprints cortos

**Mitigación Reactiva**:
- Evaluar impacto de cada cambio
- Revisar scope y timeline con cliente
- Priorizar cambios críticos

---

## MATRIZ DE RIESGOS

| Riesgo | Prob. | Impacto | Prioridad | Estado |
|--------|-------|---------|-----------|--------|
| R1: Imágenes faltantes | Alta | Alto | 1 | Monitoreado |
| R2: Especificaciones visuales | Media | Medio | 3 | Monitoreado |
| R3: Contacto faltante | Alta | Alto | 2 | Monitoreado |
| R4: Precios no definidos | Alta | Medio | 3 | Monitoreado |
| R5: Promociones pendientes | Media | Bajo | 4 | Aceptado |
| R6: Info incompleta | Media | Medio | 2 | Monitoreado |
| R7: Optimización fotos | Alta | Medio | 3 | Monitoreado |
| R8: Expectativas vs. Recursos | Media | Alto | 1 | Monitoreado |
| R9: Cambios de requisitos | Media | Medio | 2 | Monitoreado |

---

## PLAN DE CONTINGENCIA GENERAL

1. **Comunicación Proactiva**: Informar al cliente sobre recursos faltantes con anticipación
2. **Desarrollo Incremental**: Entregar bloques funcionales aunque haya pendientes
3. **Documentación Exhaustiva**: Registrar todas las decisiones y supuestos
4. **Versionamiento**: Mantener versiones del proyecto para rollback si es necesario
5. **Testing Continuo**: Probar cada bloque antes de avanzar al siguiente
