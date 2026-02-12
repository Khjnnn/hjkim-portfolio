# 베이체크 - 티켓 거래 BI 대시보드

TicketBay 티켓 거래 플랫폼의 매물 현황을 실시간 조회하고, 일별 추이를 분석하는 BI 대시보드입니다.

## 🎯 프로젝트 개요
- **목적**: 티켓 거래 매물 수와 최저가를 일별로 추적하여 시세 변동 파악
- **플랫폼**: 웹 기반 BI 대시보드 (반응형)
- **배포**: Vercel Serverless

## 🔗 링크 URL
[https://tibay-chart.vercel.app/](https://tibay-chart.vercel.app/)

## ⚡ 주요 기능
- TicketBay API 기반 3단계 카테고리 실시간 네비게이션
- 카테고리별 매물 수, 최저가, 최고가 실시간 조회
- 일별 매물 수 & 최저가 추이 복합 차트 (DB 히스토리 + 실시간)
- 좌석 등급별 매물 수(bar) + 최저가(line) 현황 차트
- Vercel Cron Job을 통한 매일 18시(KST) 자동 스냅샷 수집
- 매물 100개 이상 카테고리 대상, 카테고리당 최대 15일치 데이터 유지

## 🛠️ 기술 스택
- **Backend**: Python, Flask (Vercel Serverless Functions)
- **Frontend**: HTML, Tailwind CSS, Chart.js, Lucide Icons
- **Database**: Supabase (PostgreSQL)
- **Hosting**: Vercel (Serverless + Cron Jobs)
- **API**: TicketBay 공개 REST API

## 🚀 개발 과정
1. TicketBay 공개 API 분석 및 데이터 구조 파악
2. Flask 기반 프록시 서버 및 대시보드 UI 구현
3. Supabase PostgreSQL 스키마 설계 및 데이터 파이프라인 구축
4. Chart.js 복합 차트 시각화 구현
5. Vercel Serverless 환경 배포 및 Cron Job 자동 수집 설정
6. UTC/KST 타임존 처리 및 데이터 정합성 확보

## 💡 학습한 점
- Vercel Serverless + Cron Jobs를 활용한 서버리스 아키텍처 구축
- Supabase REST API 직접 호출 방식의 경량 DB 클라이언트 설계
- Flask 앱을 Vercel 서버리스 함수로 변환하는 배포 전략
- 외부 API 프록시 패턴을 통한 CORS 문제 해결
- Chart.js 멀티 축 복합 차트 구현

## 📱 특징
- 실시간 API 데이터와 DB 히스토리 데이터를 결합하여 표시
- 두 가지 차트 디자인 차별화
- 카테고리당 15개 데이터 자동 관리로 DB 과부하 방지
- 모바일 반응형 디자인
