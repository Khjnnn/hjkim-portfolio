# CatchDrawing - 실시간 협업 화이트보드 & 모니터링 대시보드

WebSocket 기반의 실시간 협업 화이트보드와 JVM 메트릭을 실시간으로 시각화하는 모니터링 대시보드입니다.

## 🎯 프로젝트 개요
- **목적**: STOMP 프로토콜 기반 실시간 양방향 통신과 협업 드로잉 기능 구현
- **플랫폼**: 웹 기반 실시간 협업 도구 (반응형)
- **배포**: Railway (Docker)

## 🔗 링크 URL
[https://catchdrawing-production.up.railway.app/](https://catchdrawing-production.up.railway.app/)

## ⚡ 주요 기능
- 다중 사용자 실시간 협업 화이트보드 (펜, 지우개, 사각형, 원)
- 접속자 커서 위치 실시간 공유 및 닉네임 표시
- 색상 선택, 선 굵기 조절, 전체 지우기(커스텀 모달)
- JVM CPU, 힙 메모리, WebSocket 세션 수 실시간 메트릭 대시보드
- 실시간 이벤트 로그 (접속/퇴장/그리기/지우기) 스트리밍
- Chart.js 기반 메트릭 추이 실시간 라인 차트
- 유저별 Draw 이벤트 로그 쓰로틀링 (3초/유저)

## 🛠️ 기술 스택
- **Backend**: Java 17, Spring Boot 3.2.5
- **WebSocket**: STOMP, SockJS, SimpMessagingTemplate
- **Frontend**: HTML, CSS (Glassmorphism + Mesh Gradient), Chart.js
- **Monitoring**: JVM ManagementFactory (CPU, Memory, Uptime)
- **Build**: Gradle 8.7
- **Hosting**: Railway (Docker 멀티스테이지 빌드)

## 🚀 개발 과정
1. Spring Boot + WebSocket STOMP 기반 실시간 메시징 서버 구축
2. 화이트보드 캔버스 구현 및 드로잉 좌표 비율 기반 동기화
3. WebSocket 세션 이벤트 리스너로 접속/퇴장 감지 구현
4. JVM 실시간 메트릭 수집 및 1초 주기 스케줄러 Push 구현
5. 이벤트 추적 서비스와 유저별 쓰로틀링 로직 설계
6. Mesh Gradient + Glassmorphism 기반 UI 디자인 적용
7. 모바일 반응형 최적화 (플로팅 툴바, 하단 패널)
8. Docker 멀티스테이지 빌드 및 Railway 배포

## 💡 학습한 점
- STOMP 프로토콜의 @MessageMapping → @SendTo 브로드캐스트 흐름 이해
- SimpMessagingTemplate을 활용한 서버 주도 Push 패턴
- WebSocket 세션 라이프사이클(SessionConnectedEvent/SessionDisconnectEvent) 관리
- AtomicLong, ConcurrentHashMap을 활용한 멀티스레드 안전한 상태 관리
- 고빈도 이벤트(Draw)에 대한 유저별 시간 기반 쓰로틀링 설계
- Docker 멀티스테이지 빌드를 통한 이미지 경량화 및 배포 자동화

## 📱 특징
- 캔버스 좌표를 비율(0~1)로 전송하여 해상도 독립적 동기화
- 보드별 토픽 분리(/topic/whiteboard/{boardId})로 다중 보드 확장 가능
- 모바일에서 플로팅 버튼(FAB)으로 툴바/접속자 패널 토글
- Glassmorphism + 애니메이션 Mesh Gradient 배경 디자인
- 커스텀 모달 Confirm으로 네이티브 alert 대체
